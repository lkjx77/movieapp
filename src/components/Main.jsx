import React, { Component } from 'react';
import Header from './header';
import Dashboard from './Dashboard';

class Signin extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default Signin;
