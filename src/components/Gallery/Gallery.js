import React, { Component, createRef } from 'react';
import { List, Range } from 'immutable';
import styled from '@emotion/styled';
import { ImageList } from './ImageList';
import { GalleryTitle } from './GalleryTitle';
import { LIST_MARGIN, MIN_COLUMN_WIDTH } from '../../global/constants';

const PhotosViewStyled = styled.div`
  .image-list-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
    let minHeight = Infinity;
    if (columns && columns.length > 0) {
      for (let i = 0; i < columns.length; i++) {
        minHeight = Math.min(minHeight, columns[i].clientHeight);
      }
    } else {
      minHeight = 0;
    }
    return minHeight;
  };

  onScroll = () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    this.getMinColumnHeight() < window.innerHeight + scroll &&
      this.props.requestMoreImages();
  };

  onResize = () => {
    const containerWidth = this.listContainerRef.current.clientWidth;
    const columnsCount = Math.max(
      Math.floor(containerWidth / MIN_COLUMN_WIDTH),
      1
    );
    const columnWidth = containerWidth / columnsCount - 2 * LIST_MARGIN;
    this.setState({
      columnsCount,
      columnWidth,
    });
  };

  setupResizeHandlers() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  setupScrollHandlers() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  componentDidMount() {
    if (!this.state.initialized) {
      this.setupResizeHandlers();
      this.props.infinite && this.setupScrollHandlers();
      this.setState({ initialized: true });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    this.props.infinite && window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { columnsCount, columnWidth } = this.state;
    const { images, title } = this.props;
    const imagesByColumn = List(Range(0, columnsCount).map(_ => []));

    if (columnsCount && columnWidth) {
      images.forEach((elem, i) => {
        imagesByColumn.get(i % columnsCount).push(elem);
      });
    }

    return (
      <PhotosViewStyled>
        <GalleryTitle title={title} />
        <div className="row">
          <div className="col image-list-container" ref={this.listContainerRef}>
            {imagesByColumn.map((list, i) => (
              <ImageList
                key={`list-${i}-of-${columnsCount}`}
                list={list}
                columnWidth={columnWidth}
              />
            ))}
          </div>
        </div>
      </PhotosViewStyled>
    );
  }
}
