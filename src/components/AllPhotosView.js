import React, { Component, createRef } from 'react';
import { inject, observer } from 'mobx-react';

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
    return (
      <div className="row" ref={this.listRef}>
        <div className="col">
          <ul>
            {this.props.imageURLs.map(imageURL => (
              <li key={imageURL}>
                <img alt="Shibe dog" src={imageURL} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default inject(({ appState }) => ({
  imageURLs: appState.imageURLs,
  isLoadingImageURLs: appState.isLoadingImageURLs,
  loadImageURLs: appState.loadImageURLs,
}))(observer(AllPhotosView));
