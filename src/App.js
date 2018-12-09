import React from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewPhotosView from './components/NewPhotosView';
import FavouritesView from './components/FavouritesView';

const appState = new AppState();

export const App = () => (
  <Provider appState={appState}>
    <div className="App">
      <NavBar />
      <div className="main container">
        <Switch>
          <Route exact path="/" component={NewPhotosView} />
          <Route exact path="/favourites" component={FavouritesView} />
        </Switch>
      </div>
    </div>
  </Provider>
);

export default App;
