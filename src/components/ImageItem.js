import React, { Component } from 'react';
import styled from '@emotion/styled';

const ImageItemStyled = styled.div`


  }
  .image {
    opacity: 0;
  }

  .image--loaded {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

export class ImageItem extends Component {
  onImageLoad({ target }) {
    target.classList.add('image--loaded');
    target.parentNode.parentNode.style.height = `${target.clientHeight}px`;
  }

  render() {
    const { image } = this.props;
    return (
      <ImageItemStyled>
        {image.isPlaceholder ? (
          <div className="image-placeholder">
          </div>
        ) : (
          <img
            className="image"
            alt="Shibe dog"
            src={image.url}
            decoding="async"
            onLoad={this.onImageLoad}
          />
        )}
      </ImageItemStyled>
    );
  }
}
