import React, { Component } from 'react';
import AddTaskForm from './addTaskForm'

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
        };
    }
   
    render() {
        if(!this.state.showForm){
            return (
                <React.Fragment>
                    <button
                    onClick={()=>{this.setState({showForm: !this.state.showForm})}}
                    className="btn btn-sm btn-dark">Add task</button>
                    {/* <AddTaskForm style={{display: !this.state.showForm ?'block':'none'}} onAddTask={this.props.onAddTask}/>            */}
                </React.Fragment>
             );
        } else {
            return (
                <React.Fragment>
                    <button
                    onClick={()=>{this.setState({showForm: !this.state.showForm})}}
                    className="btn btn-sm btn-dark">Add task</button>
                    <AddTaskForm name={this.props.name} onAddTask={this.props.onAddTask}/>           
                </React.Fragment>
             );
        }
        
    }
}
 
export default AddTask;