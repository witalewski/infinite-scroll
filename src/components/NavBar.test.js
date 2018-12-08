import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockImageURLs from '../fixtures/imageURLs.json';
import { NavBar } from './NavBar';

describe('NavBar', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <NavBar
        favourites={new Set(mockImageURLs)}
        location={{ pathname: '/' }}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
