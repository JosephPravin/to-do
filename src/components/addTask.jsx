import React, { Component } from 'react';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };
        this.getInput = this.getInput.bind(this);
    }

    getInput() {
        let title;
        let description;
        
        title = window.prompt('Title');
        
        if(!title) {
            title = window.prompt('Title is required');
        } else {
            description = window.prompt('Describe it!');
        }
        if(!title) return;
        this.props.onAddTask(this.props.id, {title: title, description: description});
    }
   
    render() {
        return(<React.Fragment>
        <button className="btn btn-sm btn-dark" onClick={this.getInput}>Add task</button>
        </React.Fragment>   )
    }
}
 
export default AddTask;