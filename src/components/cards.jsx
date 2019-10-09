import React, { Component } from 'react';
import Card from './card'

class Cards extends Component {
    render() {
        const { tasks} = this.props;
        return ( <div>
            {
                tasks.map(task => (
                    <Card task={task}></Card>
                ))
            }
        </div> );
    }
}
 
export default Cards;