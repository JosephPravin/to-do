import React, { Component } from 'react';
import Cards from './cards';
import AddTask from './addTask'

class List extends Component {

      render() {
        return (
          <React.Fragment>

            <Cards
            tasks={this.props.tasks}
            />
             <AddTask key={this.props.name} name={this.props.name} onAddTask={this.props.onAddTask}/>

          </React.Fragment>
        );
      }
}
 
export default List;