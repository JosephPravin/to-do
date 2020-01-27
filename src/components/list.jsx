import React, { Component } from 'react';
import Cards from './cards';
import AddTask from './addTask'

class List extends Component {

      render() {
        const {onAddTask,onDeleteTask,tasks,name} = this.props;
        return (
          <React.Fragment>

            <Cards
            tasks={tasks} onDeleteTask={onDeleteTask} name={name}
            />
             <AddTask key={name} name={name} onAddTask={onAddTask}/>

          </React.Fragment>
        );
      }
}
 
export default List;