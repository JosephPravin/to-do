import React, { Component } from 'react';
import User from './user';

class Users extends Component {
    render() { 
        const { users } = this.props;
        return ( 
        <div className="container">
            <div className="row">
                {
                    users.map(user => (
                        <User className="col-sm" name={user.name} tasks={user.tasks}></User>
                    ))
                }  
            </div>
        </div>
         );
    }
}
 
export default Users;