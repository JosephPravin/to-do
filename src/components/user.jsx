import React, { Component } from 'react';
import List from './list';

class User extends Component {

    render() { 
        const {name, className, tasks} = this.props;
        return ( 
            <div className={className}>
                <h3><mark>{name}</mark></h3> 
                <List tasks={tasks}></List>
            </div>
         );
    }
}
 
export default User;