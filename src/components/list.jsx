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
                onClick={this.addTask}
                className="btn btn-sm btn-dark"
            >Add task</button>
          </React.Fragment>
        );
      }
}
 
export default List;