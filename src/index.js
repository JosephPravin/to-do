import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import users from './data/users.json';

function reducer(state = users, action) {
    let users;
    switch(action.type) {
        case "ADD_USER":
            users = [...state];
            users.push({id:users.length+1,name: action.user, tasks: []})
            state = users;
            return state;

        case "ADD_TASK":
            users = [...state];
            const index = users.findIndex(u=>u.id===action.userId);
            action.task.status = "New";
            users[index].tasks.push(action.task);  
            state = users;
            return state;

        case "DELETE_TASK":
            users = [...state];
            const userIndex = users.findIndex(u=>u.name===action.user);
            const taskIndex = users[userIndex].tasks.indexOf(users[userIndex].tasks.filter(t => t.title === action.task.title)[0]);
            users[userIndex].tasks.splice(taskIndex, 1);
            state = users;
            return state;

        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(<Provider store = {store} ><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
