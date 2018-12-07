import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.appState = new AppState();
    window.axios=axios;
  }

  render() {
    return (
      <div className="App container">
        <Provider appState={this.appState}>
          <h1>It works!</h1>
        </Provider>
      </div>
    );
  }
}

export default App;
