import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import './components/index.scss';

ReactDOM.render(
  React.createElement(MyComponent, { title: "Hello" }),
  document.getElementById("root")
);
