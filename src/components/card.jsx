import React, { Component } from 'react';

class Card extends Component {
    
    render() { 
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.task.title}</h5>
                    <p className="card-text bg-light">{this.props.task.description}</p>
                </div>
            </div>
         );
    }
}
 
export default Card;