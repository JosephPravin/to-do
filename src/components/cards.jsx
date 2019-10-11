import React, { Component } from 'react';
import Card from './card'

class Cards extends Component {
    render() {
        const {tasks, onDeleteTask, name} = this.props;
        return ( <div>
            {
                tasks.map(task => (
                    <Card task={task} onDeleteTask={onDeleteTask} name={name}></Card>
                ))
            }
        </div> );
    }
}
 
export default Cards;