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

  .image {
    width: 300px;
    height: 400px;
    object-fit: cover;
    margin: 6px;
  }

  .image-placeholder {
    background: lightgray;
    width: 300px;
    height: 400px;
    margin: 6px;
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
    const { isLoadingImageURLs, loadImageURLs } = this.props;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (
      !isLoadingImageURLs &&
      this.listRef.current &&
      this.listRef.current.clientHeight < window.innerHeight + scrollPosition
    ) {
      loadImageURLs(16);
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
    const imagesToDisplay = this.props.imageURLs.map(imageURL => ({
      url: imageURL,
      isPlaceholder: false,
    }));
    if (this.props.isLoadingImageURLs) {
      Range(0, 16).forEach(i => imagesToDisplay.push({ isPlaceholder: true }));
    }

    return (
      <AllPhotosViewStyled className="row">
        <div className="col">
          <ul className="image-list" ref={this.listRef}>
            {imagesToDisplay.map((image, i) => (
              <li key={`${image.url || 'placeholder'}-${i}`}>
                {image.isPlaceholder ? (
                  <div className="image-placeholder" />
                ) : (
                  <img className="image" alt="Shibe dog" src={image.url} />
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
  imageURLs: appState.imageURLs,
  isLoadingImageURLs: appState.isLoadingImageURLs,
  loadImageURLs: appState.loadImageURLs,
}))(observer(AllPhotosView));
