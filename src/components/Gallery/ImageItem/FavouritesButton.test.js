import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FavouritesButton } from './FavouritesButton';

describe('FavouritesButton', () => {
  it('matches snapshot for non-favourite', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FavouritesButton isFavourite={false} visible={true} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot for favourite', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FavouritesButton isFavourite={true} visible={true} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
