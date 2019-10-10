import React, { Component } from "react";
import './App.css';
import Users from './components/users';
import AddUser from './components/addUser';
import NavBar from './components/navBar'

class App extends Component {
  state = {
    users: [{
            name: 'Joseph',
            tasks: [{
                    title: 'Button link inactive',
                    description: 'Though home page button should be active, it is inactive on page load',
                },
                {
                    title: 'Text overflowing in title card',
                    description: 'Css changes to accomodate the text within the div space',
                },
            ]
        },
        {
          name: 'Pravin',
          tasks: [ {
            title: 'Jenkins task',
            description: 'Create a jenkins job for UI deployment in dev. Branch name should be parameterised',
        },]
        },
        {
          name: 'Rajaram',
          tasks: []
        }
    ]
  };

  handleAddUser = user => {
    console.log(`New user ${user} added..`);
    const users = [...this.state.users];
    users.push({name: user, tasks: []})
    this.setState({ users });
  }

  handleAddTask = (user, task) => {
    const users = [...this.state.users];
    const index = users.findIndex(u=>u.name===user);
    console.log(`Adding task ${task} for user ${user} at index ${index}`);
    console.log(users[index].tasks);
    users[index].tasks.push(task); 
    console.log(users[index].tasks); 
    this.setState({users: users})
  }

  render() { 
    return (
      
        <div>
        <NavBar header="To Do app" users={this.state.users}></NavBar>
       
        <div className="row">
          <div className="col-10"><Users users={this.state.users} onAddTask={this.handleAddTask}/></div>
          <div className="col-2" style={{paddingLeft: '0px', marginTop: '10px'}}><AddUser onAddUser={this.handleAddUser}/></div>
        </div>
        </div> 

    );
  }
}
 
export default App;
