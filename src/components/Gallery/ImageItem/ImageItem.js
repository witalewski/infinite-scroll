import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from '@emotion/styled';
import { FavouritesIndicator } from './FavouritesIndicator';
import { FavouritesButton } from './FavouritesButton';

const ImageItemStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .image {
    opacity: 0;
    position: absolute;
  }

  .image--loaded {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

export class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageLoaded: false,
      mouseOver: false,
      imageHeight: 0,
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  onImageLoad = ({ target }) => {
    this.setState({ isImageLoaded: true, imageHeight: target.clientHeight });
  };

  onMouseOver = () => {
    this.setState({ mouseOver: true });
  };

  onMouseOut = () => {
    if (!this.state.message) {
      this.setState({
        mouseOver: false,
      });
    }
  };

  addCurrentImageToFavourites = () => {
    this.props.addToFavourites(this.props.image);
  };

  removeCurrentImageFromFavourites = () => {
    this.props.removeFromFavourites(this.props.image);
  };

  render() {
    const { image, favourites } = this.props;
    const { mouseOver, isImageLoaded, imageHeight } = this.state;
    const isFavourite = favourites.includes(this.props.image);
    return (
      <ImageItemStyled
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        style={{ height: imageHeight || this.props.height }}
      >
        {image && (
          <img
            className={`image ${isImageLoaded && 'image--loaded'}`}
            alt="Shibe dog"
            src={image}
            decoding="async"
            onLoad={this.onImageLoad}
          />
        )}
        <FavouritesButton
          visible={mouseOver}
          isFavourite={isFavourite}
          onButtonClick={
            isFavourite
              ? this.removeCurrentImageFromFavourites
              : this.addCurrentImageToFavourites
          }
        />
        <FavouritesIndicator isFavourite={isFavourite} />
      </ImageItemStyled>
    );
  }
}

export default inject(({ appState }) => ({
  favourites: appState.favourites,
  addToFavourites: appState.addToFavourites,
  removeFromFavourites: appState.removeFromFavourites,
}))(observer(ImageItem));
