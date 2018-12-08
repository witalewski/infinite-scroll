import React, { Component, createRef } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Range } from 'immutable';
import styled from '@emotion/styled';

const LIST_WIDTH = 300;
const LIST_MARGIN = 6;
const COLUMN_WIDTH = LIST_WIDTH + 2 * LIST_MARGIN;

const AllPhotosViewStyled = styled.div`
  .image-list-container {
    display: flex;
    justify-content: center;
  }

  .image-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding: 0;
    margin: 0 ${LIST_MARGIN}px;
  }

  .image-list--item {
    background: lightgray;
    margin: ${LIST_MARGIN}px 0;
  }

  .image {
    width: 100%;
    object-fit: cover;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
  }
`;

export class AllPhotosView extends Component {
  constructor(props) {
    super(props);
    this.listContainerRef = createRef();
    this.state = {
      initialized: false,
      columnsCount: 0,
      columnWidth: 0,
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

  updateColumnsCount() {
    const columnsCount = Math.floor(
      this.listContainerRef.current.clientWidth / COLUMN_WIDTH
    );
    const columnWidth =
      this.listContainerRef.current.clientWidth / columnsCount -
      2 * LIST_MARGIN;
    this.setState({
      columnsCount,
      columnWidth,
    });
  }

  componentDidMount() {
    if (!this.state.initialized) {
      window.addEventListener('scroll', this.loadImageURLsIfNeeded.bind(this));
      window.addEventListener('resize', this.updateColumnsCount.bind(this));
      this.loadImageURLsIfNeeded();

      this.updateColumnsCount();
      this.setState({ initialized: true });
    }
  }

  onImageLoad({ target }) {
    target.parentNode.style.minHeight = 0;
  }

  render() {
    const { columnsCount, columnWidth } = this.state;
    const { images } = this.props;
    const imagesByColumn = List(Range(0, columnsCount).map(_ => []));
    if (columnsCount) {
      images.forEach((elem, i) =>
        imagesByColumn.get(i % columnsCount).push(elem)
      );
    }
    return (
      <AllPhotosViewStyled className="row">
        <div className="col image-list-container" ref={this.listContainerRef}>
          {imagesByColumn.map((list, i) => (
            <ul key={`list-${i}-of-${columnsCount}`} className="image-list">
              {list.map((image, i) => (
                <li
                  className="image-list--item"
                  key={`${image.url || 'placeholder'}-${i}`}
                  style={{
                    minHeight: columnWidth * image.placeholderHeightRatio,
                  }}
                >
                  {image.isPlaceholder ? (
                    <div className="image-placeholder" />
                  ) : (
                    <img
                      className="image"
                      alt="Shibe dog"
                      src={image.url}
                      decoding="async"
                      onLoad={this.onImageLoad}
                    />
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </AllPhotosViewStyled>
    );
  }
}

export default inject(({ appState }) => ({
  images: appState.images,
  requestMoreImages: appState.requestMoreImages,
}))(observer(AllPhotosView));
