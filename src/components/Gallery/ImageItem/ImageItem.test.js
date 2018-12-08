import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Set } from 'immutable';
import mockImageURLs from '../../../fixtures/imageURLs.json';
import { ImageItem } from './ImageItem';

describe('ImageItem', () => {
  it('matches snapshot for favourite image', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ImageItem
        image={mockImageURLs[0]}
        height={400}
        favourites={new Set(mockImageURLs)}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot for non-favourite image', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ImageItem
        image={mockImageURLs[0]}
        height={400}
        favourites={new Set([])}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
