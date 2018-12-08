import React, { Component } from 'react';
import styled from '@emotion/styled';
import ImageItem from './ImageItem/ImageItem';
import { placeholderHeightGenerator } from '../../utils/placeholderHeightGenerator';
import { LIST_MARGIN } from '../../global/constants';

const ImageListStyled = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding: 0;
    margin: 0 ${LIST_MARGIN}px;
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
