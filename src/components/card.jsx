import React, { Component } from 'react';

class Card extends Component {
    
    render() { 
        const {task,onDeleteTask,name} = this.props;
        
        const statusBg = () => {
            if(/done/i.test(task.status))
                return "badge badge-success";
            else if(/in progress/i.test(task.status))
                return "badge badge-warning";
            else
                return "badge badge-primary";
        }

        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <p className="card-title">{task.title} <span className={statusBg()} style={{float: "right"}}>{task.status}</span></p>
                    <p className="card-text bg-light">{task.description}</p>
                    <a href="#!" onClick={()=>{onDeleteTask(name, task)}} style={{float:"right", color: "red"}}>Delete</a>
                </div>
            </div>
         );
    }
}
 
export default Card;