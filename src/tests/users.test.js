import React from 'react';
import renderer from "react-test-renderer";
import Users from '../components/users';
import users from '../data/users.json';

test("App snapshot", () => {
  const component = renderer.create(<Users users={users} onAddTask={()=>{}} onDeleteTask={()=>{}}/>);
  expect(component.toJSON()).toMatchSnapshot();
});
