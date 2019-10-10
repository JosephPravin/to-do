import React, { Component } from "react";
import './App.css';
import Users from './components/users';
import AddUser from './components/addUser';

class App extends Component {
  state = {
    users: [{
            name: 'Joseph',
            tasks: [{
                    title: 'Button link inactive',
                    description: 'Though the button shouldbe active, it is inactive for a while',
                },
                {
                    title: 'Text overflowing title card',
                    description: 'Css changes to accomodate the text within the div space',
                }, {
                    title: 'Jenkins job for UI deployment failing',
                    description: 'Jenkins job should be distributed on multiple nodes. Needs configuration changes',
                },
            ]
        },
        {
          name: 'Peter',
          tasks: [{
              title: 'Button link inactive',
              description: 'Though the button shouldbe active, it is inactive for a while',
          }, {
            title: 'Button link inactive',
            description: 'Though the button shouldbe active, it is inactive for a while',
        },]
      },
        {
            name: 'Michael',
            tasks: [{
                title: 'Button link inactive',
                description: 'Though the button shouldbe active, it is inactive for a while',
            }, ]
        },
        {
            name: 'George',
            tasks: [{
              title: 'Improvise sql connection',
              description: 'Current sql implemention uses Dao. Instead modify it to use CRUDRepository'
            }]
        },
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
      <React.Fragment>
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className='alert alert-primary'>To Do app</h2> {" "}
            <p style={{textAlign: "right"}}>
            Number of users with tasks: <span className="badge badge-pill badge-primary">{this.state.users.filter(c => c.tasks.length > 0).length}{" "}</span>
            </p>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-10"><Users users={this.state.users} onAddTask={this.handleAddTask}/></div>
          <div className="col-2"><AddUser onAddUser={this.handleAddUser}/></div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
