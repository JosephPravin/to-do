import React, { Component } from 'react';
import List from './list';

class User extends Component {

    render() { 
        const {name, className, tasks, onAddTask, onDeleteTask} = this.props;
        return ( 
            <div className={className} style={{padding: "1em"}}>
                <h3><mark>{name}</mark></h3> 
                <List tasks={tasks} name={name} onAddTask={onAddTask} onDeleteTask={onDeleteTask}></List>
            </div>
         );
    }
}
 
export default User;