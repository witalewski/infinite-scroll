import React, { Component, createRef } from 'react';
import { inject, observer } from 'mobx-react';
import { Range } from 'immutable';
import styled from '@emotion/styled';

const AllPhotosViewStyled = styled.div`
  .image-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .image-list--item {
    background: lightgray;
    margin: 6px;
  }

  .image {
    width: 300px;
    height: 400px;
    object-fit: cover;
  }

  .image-placeholder {
    width: 300px;
    height: 400px;
  }
`;

export class AllPhotosView extends Component {
  constructor(props) {
    super(props);
    this.listRef = createRef();
    this.state = {
      initialized: false,
    };
  }
  loadImageURLsIfNeeded() {
    const { requestMoreImages } = this.props;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    /* always have one more screen loaded */
    if (
      document.documentElement.scrollHeight <
      window.innerHeight * 2 + scrollPosition
    ) {
      requestMoreImages(16);
    }
  }

  componentDidMount() {
    if (!this.state.initialized) {
      window.addEventListener('scroll', this.loadImageURLsIfNeeded.bind(this));
      this.loadImageURLsIfNeeded();
      this.setState({ initialized: true });
    }
  }

  render() {
    console.log(this.props.images);
    return (
      <AllPhotosViewStyled className="row">
        <div className="col">
          <ul className="image-list" ref={this.listRef}>
            {this.props.images.map((image, i) => (
              <li
                className="image-list--item"
                key={`${image.url || 'placeholder'}-${i}`}
              >
                {image.isPlaceholder ? (
                  <div className="image-placeholder" />
                ) : (
                  <img
                    className="image"
                    alt="Shibe dog"
                    src={image.url}
                    decoding="async"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </AllPhotosViewStyled>
    );
  }
}

export default inject(({ appState }) => ({
  images: appState.images,
  requestMoreImages: appState.requestMoreImages,
}))(observer(AllPhotosView));
