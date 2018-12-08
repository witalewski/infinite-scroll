import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockImageURLs from '../fixtures/imageURLs.json';
import { NewPhotosView } from './NewPhotosView';

describe('NewPhotosView', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <NewPhotosView images={mockImageURLs} requestMoreImages={jest.fn()} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
