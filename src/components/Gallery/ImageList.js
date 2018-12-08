import React, { Component } from 'react';
import styled from '@emotion/styled';
import ImageItem from './ImageItem/ImageItem';
import { LIST_MARGIN } from '../../global/constants';
import loadingGif from '../../assets/loading.gif';
import { placeholderHeightGenerator } from '../../utils/placeholderHeightGenerator';

const ImageListStyled = styled.ul`
  .image-list--item {
    background-image: url(${loadingGif});
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: multiply;

    margin: ${LIST_MARGIN}px 0;
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
            key={`${image || 'placeholder'}-${i}`}
          >
            <ImageItem
              image={image}
              height={placeholderHeightGenerator.next() * columnWidth}
            />
          </li>
        ))}
      </ImageListStyled>
    );
  }
}