import React, { Component } from 'react';

import TestSetupForm from './containers/test_setup_form';
import TestTrace from './containers/test_trace';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Test fetch() and HTTP Status Codes</h1>
        <div className="App">
          <TestSetupForm />
          <TestTrace />
        </div>
      </div>
    );
  }
}

export default App;
