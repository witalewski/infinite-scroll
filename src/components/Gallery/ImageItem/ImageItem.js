import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from '@emotion/styled';
import { FavouritesIndicator } from './FavouritesIndicator';
import { Overlay } from './Overlay';

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
      message: '',
      primaryButtonVisible: false,
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
        message: '',
        undoVisible: false,
        undoAction: null,
      });
    }
  };

  addToFavourites = () => {
    this.props.addToFavourites(this.props.image);
    this.setState({
      message: 'Added to favourites!',
      undoAction: this.removeFromFavourites,
    });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.setState({
        mouseOver: false,
        message: '',
        undoVisible: false,
        undoAction: null,
        primaryButtonVisible: false,
      });
    }, 2000);
  };

  removeFromFavourites = () => {
    this.props.removeFromFavourites(this.props.image);
    this.setState({
      message: 'Removed from favourites.',
      undoAction: this.addToFavourites,
    });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.setState({
        mouseOver: false,
        message: '',
        undoVisible: false,
        undoAction: null,
        primaryButtonVisible: false,
      });
    }, 2000);
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
        <Overlay
          mouseOver={mouseOver}
          message={this.state.message}
          isFavourite={isFavourite}
          addToFavourites={this.addToFavourites}
          removeFromFavourites={this.removeFromFavourites}
          undoAction={this.state.undoAction}
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
