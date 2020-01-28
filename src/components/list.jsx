import React, { Component } from 'react';
import Cards from './cards';
import AddTask from './addTask'

class List extends Component {

      render() {
        const {onAddTask,onDeleteTask,tasks,name, id} = this.props;
        return (
          <React.Fragment>

            <Cards
            tasks={tasks} onDeleteTask={onDeleteTask} name={name}
            />
             <AddTask key={name} id={id} onAddTask={onAddTask}/>

          </React.Fragment>
        );
      }
}
 
export default List;