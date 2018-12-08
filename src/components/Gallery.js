import React, { Component, createRef } from 'react';
import { List, Range } from 'immutable';
import styled from '@emotion/styled';
import { ImageList } from './ImageList';
import {
  LIST_MARGIN,
  MIN_COLUMN_WIDTH,
} from '../global/constants';

const PhotosViewStyled = styled.div`
  .image-list-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .image-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding: 0;
    margin: 0 ${LIST_MARGIN}px;
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

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.listContainerRef = createRef();
    this.state = {
      initialized: false,
      columnsCount: 0,
      actualColumnWidth: 0,
    };
  }

  getMinColumnHeight = () => {
    const columns = this.listContainerRef.current.childNodes;
    if (columns && columns.length > 0) {
      let minHeight = Infinity;
      for (let i = 0; i < columns.length; i++) {
        minHeight = Math.min(minHeight, columns[i].clientHeight);
      }
      return minHeight;
    }
    return 0;
  };

  onScroll = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (this.getMinColumnHeight() < window.innerHeight + scrollPosition) {
      this.props.requestMoreImages(16);
    }
  };

  onResize = () => {
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
  };

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
      <PhotosViewStyled className="row">
        <div className="col image-list-container" ref={this.listContainerRef}>
          {imagesByColumn.map((list, i) => (
            <ImageList
              key={`list-${i}-of-${columnsCount}`}
              list={list}
              columnWidth={actualColumnWidth}
            />
          ))}
        </div>
      </PhotosViewStyled>
    );
  }
}
