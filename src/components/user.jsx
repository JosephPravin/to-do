import React, { Component } from 'react';
import List from './list';

class User extends Component {

    render() { 
        const {name, className, tasks, onAddTask, onDeleteTask, id} = this.props;
        return ( 
            <div className={className} style={{padding: "1em"}}>
                <h3>{name}</h3> 
                <List tasks={tasks} name={name} onAddTask={onAddTask} onDeleteTask={onDeleteTask} id={id}></List>
            </div>
         );
    }
}
 
export default User;