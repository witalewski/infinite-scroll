import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Set } from 'immutable';
import mockImageURLs from '../fixtures/imageURLs.json';
import { FavouritesView } from './FavouritesView';

describe('FavouritesView', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FavouritesView favourites={new Set(mockImageURLs)} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
