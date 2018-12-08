import React, { Component } from 'react';
import ImageItem from './ImageItem/ImageItem';
import { placeholderHeightGenerator } from '../../utils/placeholderHeightGenerator';

export class ImageList extends Component {
  render() {
    const { list, columnWidth } = this.props;
    return (
      <ul className="image-list">
        {list.map((image, i) => (
          <li
            className="image-list--item"
            key={`${image || 'placeholder'}-${i}`}
          >
            <ImageItem
              image={image}
              height={placeholderHeightGenerator.next() * columnWidth}
            />
          </li>
        ))}
      </ul>
    );
  }
}
