import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';

class App extends Component {
  constructor() {
    super();
    this.appState = new AppState();
  }

  render() {
    return (
      <div className="App">
        <Provider appState={this.appState}>
          <h1>It works!</h1>
        </Provider>
      </div>
    );
  }
}

export default App;
