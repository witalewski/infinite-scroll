import { AppState } from './AppState';
import { Set } from 'immutable';
import mockImageURLs from './fixtures/imageURLs.json';

describe('AppState', () => {
  let appState;

  beforeEach(() => {
    appState = new AppState();
  });

  it('sets image urls', () => {
    appState.setImageURLs(mockImageURLs);
    expect(appState.imageURLs).toEqual(mockImageURLs);
  });

  it('sets favourites', () => {
    const favouritesSet = new Set(mockImageURLs);
    appState.setFavourites(favouritesSet);
    expect(appState.favourites).toEqual(favouritesSet);
  });

  it('adds to favourites', () => {
    const favourite = 'img.jpg';
    appState.addToFavourites(favourite);
    expect(appState.favourites.includes(favourite)).toBe(true);
  });

  it('removes from to favourites', () => {
    const favourite = 'img.jpg';
    appState.addToFavourites(favourite);
    appState.removeFromFavourites(favourite);
    expect(appState.favourites.includes(favourite)).toBe(false);
  });
});
