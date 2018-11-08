import React, { Component } from 'react';

import FetchForm from './containers/fetch_form';
import Request from './containers/request';
import Response from './containers/response';
import FetchTrace from './containers/fetch_trace';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchForm />
        <Request />
        <Response />
        <FetchTrace />
      </div>
    );
  }
}

export default App;
