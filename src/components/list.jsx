import React, { Component } from 'react';
import Cards from './cards';
import AddTask from './addTask'

class List extends Component {

      render() {
        const {onAddTask,onDeleteTask} = this.props;
        return (
          <React.Fragment>

            <Cards
            tasks={this.props.tasks} onDeleteTask={onDeleteTask} name={this.props.name}
            />
             <AddTask key={this.props.name} name={this.props.name} onAddTask={onAddTask}/>

          </React.Fragment>
        );
      }
}
 
export default List;