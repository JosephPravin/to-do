import React, { Component } from "react";
import { connect } from "react-redux";
import Users from './components/users';
import AddUser from './components/addUser';
import NavBar from './components/navBar';

class App extends Component {

  handleAddUser = u => {
    this.props.dispatch({
      type: "ADD_USER",
      user: u
    });
  }

  handleAddTask = (uid, t) => {
    this.props.dispatch({
      type: "ADD_TASK",
      userId: uid,
      task: t
    });
  }

  handleDeleteTask = (u, t) => {
    this.props.dispatch({
      type: "DELETE_TASK",
      user: u,
      task: t
    });
  }

  render() {     
    return (
      
        <React.Fragment>
          <NavBar header="To Do app" users={ this.props.users }></NavBar>
        
          <div className="row">
            <div className="col-10"><Users users={this.props.users} onAddTask={this.handleAddTask} onDeleteTask={this.handleDeleteTask}/></div>
            <div className="col-2" style={{paddingLeft: '0px', marginTop: '10px'}}><AddUser onAddUser={this.handleAddUser}/></div>
          </div>
        </React.Fragment> 

    );
  }
}

const mapStateToProps = (state) => ({
    users: state
});

export default connect(mapStateToProps)(App);
