import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from '@emotion/styled';
import { FavouritesIndicator } from './FavouritesIndicator';
import { FavouritesButton } from './FavouritesButton';
import { LIST_MARGIN } from '../../../global/constants';
import loadingGif from '../../../assets/loading.gif';

const ImageItemStyled = styled.div`
  position: relative;
  width: 100%;
  margin: ${LIST_MARGIN}px 0;
  transition: height 0.2s;

  cursor: pointer;

  background-image: url(${loadingGif});
  background-color: lightgray;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;

  .image {
    width: 100%;
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
  onImageLoad = ({ target }) => {
    this.setState({ isImageLoaded: true, imageHeight: target.clientHeight });
  };

  onMouseOver = () => {
    this.setState({ mouseOver: true });
  };

  onMouseOut = () => {
    this.setState({
      mouseOver: false,
    });
  };

  addCurrentImageToFavourites = () => {
    this.props.addToFavourites(this.props.image);
    this.setState({ mouseOver: false });
  };

  removeCurrentImageFromFavourites = () => {
    this.props.removeFromFavourites(this.props.image);
    this.setState({ mouseOver: false });
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
        onClick={
          isFavourite
            ? this.removeCurrentImageFromFavourites
            : this.addCurrentImageToFavourites
        }
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
        <FavouritesButton visible={mouseOver} isFavourite={isFavourite} />
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
