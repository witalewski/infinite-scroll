import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockImageURLs from '../../fixtures/imageURLs.json';
import { Gallery } from './Gallery';

describe('Gallery', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Gallery
        infinite
        title="Test Gallery"
        images={mockImageURLs}
        requestMoreImages={jest.fn()}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
