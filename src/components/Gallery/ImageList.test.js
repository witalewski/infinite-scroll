import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockImageURLs from '../../fixtures/imageURLs.json';
import { ImageList } from './ImageList';

describe('ImageList', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ImageList list={mockImageURLs} columnWidth={300} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
