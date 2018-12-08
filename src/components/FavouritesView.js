import React from 'react';
import { observer, inject } from 'mobx-react';
import { Gallery } from './Gallery/Gallery';

export const FavouritesView = ({ favourites }) => (
  <Gallery title="Favourites" images={favourites.toJS()} />
);

export default inject(({ appState }) => ({
  favourites: appState.favourites,
}))(observer(FavouritesView));
