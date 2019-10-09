import React, { Component } from 'react';

class AddUser extends Component {
    
    state= {
        isHidden: true
    }

    render() { 
        return (
            <React.Fragment>
                <button
                onClick={()=> { this.setState({isHidden: !this.state.isHidden}) }}
                className="btn btn-success">
                    + Add new user
                </button>

                <input
                id="newUser"
                type="text"
                placeholder="User name"
                hidden={this.state.isHidden}
                onKeyDown={(e)=>{
                    if(e.key === 'Enter' || e.keyCode === 13) {
                        let user = document.getElementById("newUser").value;

                        // checks if name is empty or contains only spaces
                        if(!user || !user.replace(/\s/g, '').length) return;

                        document.getElementById("newUser").value = '';

                        // cleaning the name before adding to data store
                        this.props.onAddUser(user.charAt(0).toUpperCase() + user.slice(1).toLowerCase());
                    }
                }}/>
            </React.Fragment>
         );
    }
}
 
export default AddUser;