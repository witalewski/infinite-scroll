import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import styled from '@emotion/styled';
import { AppState } from './AppState';
import NavBar from './components/NavBar';
import { AllPhotosView } from './components/AllPhotosView';
import { FavouritesView } from './components/FavouritesView';

const AppStyled = styled.div`
  .main {
    padding-top: 56px;
  }
`;

const appState = new AppState();

export const App = () => (
  <Provider appState={appState}>
    <AppStyled className="App">
      <NavBar
        items={[
          { label: 'Home', path: '/' },
          { label: 'Favourites', path: '/favourites' },
        ]}
      />
      <div className="main container">
        <Switch>
          <Route exact path="/" component={AllPhotosView} />
          <Route path="/favourites" component={FavouritesView} />
        </Switch>
      </div>
    </AppStyled>
  </Provider>
);

export default App;
