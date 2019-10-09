import React, { Component } from "react";
import './App.css';
import Users from './components/users'

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
  render() { 
    return (
      <React.Fragment>
        <h2 className='alert alert-primary'>To Do app</h2>
        <Users users={this.state.users}/>
      </React.Fragment>
    );
  }
}
 
export default App;
