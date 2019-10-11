import React, { Component } from 'react';

class Card extends Component {
    
    render() { 
        const {task,onDeleteTask,name} = this.props;
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text bg-light">{task.description}</p>
                    <a href="#" onClick={()=>{onDeleteTask(name, task)}} style={{float:"right", color: "red"}} class="card-link">Delete</a>
                </div>
            </div>
         );
    }
}
 
export default Card;