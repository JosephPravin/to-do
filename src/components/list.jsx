import React, { Component } from 'react';
import Cards from './cards'

class List extends Component {
      addTask = task => {
        console.log('Adding new task...')
      }

      render() {
        return (
          <React.Fragment>
            <Cards
            tasks={this.props.tasks}
            />
            
            <button
                onClick={()=>this.props.onAddTask(this.props.name, {title: '', description: ''})}          
                className="btn btn-sm btn-dark"
            >Add task</button>
          </React.Fragment>
        );
      }
}
 
export default List;