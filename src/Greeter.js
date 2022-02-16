//Greeter,js
import React, { Component } from 'react'
import config from './config.json';
const root = require('./greeter.css')
import './greeter.css';

console.log(root["default"].locals.root)

class Greeter extends Component {
  render() {
    return (
      <div className={root["default"].locals.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter