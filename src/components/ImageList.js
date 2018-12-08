import React, { Component } from 'react';
import { ImageItem } from './ImageItem';

export class ImageList extends Component {
  onImageLoad({ target }) {
    target.parentNode.style.minHeight = 0;
  }
  render() {
    const { list, columnWidth } = this.props;
    return (
      <ul className="image-list">
        {list.map((image, i) => (
          <li
            className="image-list--item"
            key={`${image.url || 'placeholder'}-${i}`}
            style={{
              minHeight: columnWidth * image.placeholderHeightRatio,
            }}
          >
            <ImageItem image={image} onImageLoad={this.onImageLoad} />
          </li>
        ))}
      </ul>
    );
  }
}
