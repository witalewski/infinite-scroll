import React, { Component } from 'react';
import styled from '@emotion/styled';
import { ImageItem } from './ImageItem';

const ImageListStyled = styled.ul`
  .image-list--item {
    transition: height 0.2s;
  }
`;
export class ImageList extends Component {
  render() {
    const { list, columnWidth } = this.props;
    return (
      <ImageListStyled className="image-list">
        {list.map((image, i) => (
          <li
            className="image-list--item"
            key={`${image.url || 'placeholder'}-${i}`}
            style={{
              height: columnWidth * image.placeholderHeightRatio,
            }}
          >
            <ImageItem image={image} />
          </li>
        ))}
      </ImageListStyled>
    );
  }
}
