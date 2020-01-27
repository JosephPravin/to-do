import React from 'react';
import renderer from "react-test-renderer";
import App from './App';

describe("Snapshots", () => {
  test("App snapshot", () => {
    const component = renderer.create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
