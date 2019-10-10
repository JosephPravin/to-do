import React, { Component } from "react";

class AddTaskForm extends Component {
  constructor(props) {
    console.log(`AddTaskForm constructor`);
    super(props);
    this.state = {
      isHidden: false,
      title: "",
      description: ""
    };

    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  setTitle(title) {
    this.setState({ title: title });
  }

  setDescription(description) {
    this.setState({ description: description });
  }

  addTask(e) {
    if (
      !this.state.title ||
      !this.state.title.replace(/\s/g, "").length ||
      !this.state.description ||
      !this.state.description.replace(/\s/g, "").length
    )
      return;

    this.props.onAddTask(this.props.name, {
      title: this.state.title,
      description: this.state.description
    });
    this.setState({
      isHidden: !this.state.isHidden,
      title: "",
      description: ""
    });
  }

  render() {
    if (!this.state.isHidden) {
      return (
        <div>
          <div>
            <input
              id="newTaskTitle"
              type="text"
              placeholder="Task title"
              required
              onBlur={e => {
                this.setTitle(document.getElementById("newTaskTitle").value);
              }}
            />
          </div>
          <div>
            <textarea
              id="newTaskDescription"
              placeholder="Task Description"
              onBlur={e => {
                this.setDescription(
                  document.getElementById("newTaskDescription").value
                );
              }}
            />
          </div>
          <button onClick={this.addTask} className="btn btn-sm btn-dark">
            Save
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AddTaskForm;
