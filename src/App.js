import React, { Component } from "react";
import './App.css';
import Users from './components/users';
import AddUser from './components/addUser';
import NavBar from './components/navBar';
import users from './data/users.json'

class App extends Component {
  state = {
    users: Array
  };

  constructor(props) {
    super(props);
    this.state = { users };
  };

  handleAddUser = user => {
    const users = [...this.state.users];
    users.push({id:users.length+1,name: user, tasks: []})
    this.setState({ users });
  }

  handleAddTask = (user, task) => {
    const users = [...this.state.users];
    const index = users.findIndex(u=>u.name===user);
    users[index].tasks.push(task);  
    this.setState({users: users})
  }

  handleDeleteTask = (user, task) => {
    const users = [...this.state.users];
    const userIndex = users.findIndex(u=>u.name===user);
    const taskIndex = users[userIndex].tasks.indexOf(users[userIndex].tasks.filter(t => t.title === task.title)[0]);
    users[userIndex].tasks.splice(taskIndex, 1);
    this.setState({users})
  }

  render() {     
    return (
      
        <div>
        <NavBar header="To Do app" users={ this.state.users }></NavBar>
       
        <div className="row">
          <div className="col-10"><Users users={this.state.users} onAddTask={this.handleAddTask} onDeleteTask={this.handleDeleteTask}/></div>
          <div className="col-2" style={{paddingLeft: '0px', marginTop: '10px'}}><AddUser onAddUser={this.handleAddUser}/></div>
        </div>
        </div> 

    );
  }
}
 
export default App;
