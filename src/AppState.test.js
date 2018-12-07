import { AppState } from './AppState';
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
});
