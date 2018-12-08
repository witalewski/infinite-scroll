import React, { Component, createRef } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Range } from 'immutable';
import styled from '@emotion/styled';
import { ImageList } from './ImageList';

const MIN_LIST_WIDTH = 300;
const LIST_MARGIN = 6;
const MIN_COLUMN_WIDTH = MIN_LIST_WIDTH + 2 * LIST_MARGIN;

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
      actualColumnWidth: 0,
    };
  }
  onScroll = () => {
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

  onResize  = () => {
    const columnsCount = Math.floor(
      this.listContainerRef.current.clientWidth / MIN_COLUMN_WIDTH
    );
    const actualColumnWidth =
      this.listContainerRef.current.clientWidth / columnsCount -
      2 * LIST_MARGIN;
    this.setState({
      columnsCount,
      actualColumnWidth,
    });
  }

  componentDidMount() {
    if (!this.state.initialized) {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onResize);

      //invoke at once to get initial values
      this.onScroll();
      this.onResize();

      this.setState({ initialized: true });
    }
  }

  render() {
    const { columnsCount, actualColumnWidth } = this.state;
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
            <ImageList
              key={`list-${i}-of-${columnsCount}`}
              list={list}
              columnWidth={actualColumnWidth}
            />
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
