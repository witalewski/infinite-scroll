import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { GalleryTitle } from './GalleryTitle';

describe('GalleryTitle', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<GalleryTitle title="Test Gallery" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
