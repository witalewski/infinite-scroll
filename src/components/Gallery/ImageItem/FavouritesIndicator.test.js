import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FavouritesIndicator } from './FavouritesIndicator';

describe('FavouritesIndicator', () => {
  it('matches snapshot for non-favourite', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FavouritesIndicator isFavourite={false} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot for favourite', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FavouritesIndicator isFavourite={true} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
