import { AppState } from './AppState';

describe('AppState', () => {
  let appState;

  beforeEach(() => {
    appState = new AppState();
  });

  it('works', () => {
    expect(typeof appState).toBe('object');
  });

});
