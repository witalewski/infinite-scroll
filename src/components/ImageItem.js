import React, { Component, createRef } from 'react';
import { observer, inject } from 'mobx-react';
import styled from '@emotion/styled';

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

  .overlay {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 1;

    background: rgba(255, 255, 255, 0.9);

    transition: opacity 0.2s;
    transform: translateY(-50%);
  }

  .overlay--hidden {
    opacity: 0;
  }

  .primary-button--hidden {
    display: none;
  }

  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .message--hidden {
    display: none;
  }

  .favourites-indicator {
    position: absolute;
    bottom: 12px;
    right: 12px;
    transition: opacity 0.5s 0.2s;
  }

  .favourites-indicator--hidden {
    opacity: 0;
  }
`;

export class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      message: '',
      primaryButtonVisible: false,
    };
    this.imageRef = createRef();
  }
  onImageLoad({ target }) {
    target.classList.add('image--loaded');
    target.parentNode.parentNode.style.height = `${target.clientHeight}px`;
  }

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
    const image = this.imageRef.current;
    this.props.addToFavourites({
        url: this.props.image.url,
        placeholderHeightRatio: image.clientHeight / image.clientWidth,
      });
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
    const image = this.imageRef.current;
    this.props.removeFromFavourites({
      url: this.props.image.url,
      placeholderHeightRatio: image.clientHeight / image.clientWidth,
    });
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
    const { mouseOver } = this.state;
    const isFavourite = favourites.includes(image.url);
    return (
      <ImageItemStyled
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {image.isPlaceholder ? (
          <div className="image-placeholder" />
        ) : (
          <img
            ref={this.imageRef}
            className="image"
            alt="Shibe dog"
            src={image.url}
            decoding="async"
            onLoad={this.onImageLoad}
          />
        )}
        <div className={`overlay ${!mouseOver && 'overlay--hidden'}`}>
          <button
            type="button"
            className={`btn btn-outline-primary primary-button ${this.state
              .message && 'primary-button--hidden'}`}
            onClick={
              isFavourite ? this.removeFromFavourites : this.addToFavourites
            }
          >
            {isFavourite ? '💔 Remove from Favourites' : '❤️ Add to Favourites'}
          </button>
          <div
            className={`message ${!this.state.message && 'message--hidden'}`}
          >
            <span>{this.state.message}</span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.state.undoAction}
            >
              Undo
            </button>
          </div>
        </div>
        <div
          className={`favourites-indicator ${!isFavourite &&
            'favourites-indicator--hidden'}`}
        >
          <span role="img" aria-label="favourite">
            ❤️
          </span>
          ️
        </div>
      </ImageItemStyled>
    );
  }
}

export default inject(({ appState }) => ({
  favourites: appState.favourites,
  addToFavourites: appState.addToFavourites,
  removeFromFavourites: appState.removeFromFavourites,
}))(observer(ImageItem));
