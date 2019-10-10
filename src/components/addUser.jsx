import React, { Component } from 'react';

class AddUser extends Component {
    
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
    }

    getUser() {
        let user = window.prompt("Name")
        if(!user) {
            user = window.prompt("Name is required")
        }
        if(!user || !user.replace(/\s/g, '').length) return;
        this.props.onAddUser(user.charAt(0).toUpperCase() + user.slice(1).toLowerCase());
    }

    render() { 
        return (
            <div>
                <button
                onClick={this.getUser}
                className="btn btn-primary">
                    + Add new user
                </button>
            </div>
         );
    }
}
 
export default AddUser;