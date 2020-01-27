import React, { Component } from 'react';
import User from './user';

class Users extends Component {

    render() { 
        const { users, onAddTask, onDeleteTask } = this.props;
        return ( 
        <div className="container">
            <div className="row">
                {
                    users.map(user => (
                        <User key={user.id} className="col" name={user.name} tasks={user.tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}></User>
                    ))
                }  
            </div>
        </div>
         );
    }
}
 
export default Users;