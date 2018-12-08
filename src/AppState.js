import { observable, action, computed } from 'mobx';
import { Range } from 'immutable';
import { getImageURLs } from './api/shibeAPI';
class AppState {
  @observable imageURLs = [];
  @observable placeholdersCount = 0;

  @action
  setImageURLs = imageURLs => {
    this.imageURLs.replace(imageURLs);
  };

  @action addImageURLs = imageURLs => {
    this.imageURLs.push(...imageURLs);
  };

  @action setPlaceholdersCount = placeholdersCount => {
    this.placeholdersCount = placeholdersCount;
  };

  @computed get images() {
    return [
      ...this.imageURLs.map(url => ({ url, isPlaceholder: false })),
      ...Range(0, this.placeholdersCount).map(_ => ({ isPlaceholder: true })),
    ];
  }

  @action
  requestMoreImages = count => {
    this.setPlaceholdersCount(this.placeholdersCount + count);
    getImageURLs(count).then(({ data }) => {
      this.setPlaceholdersCount(this.placeholdersCount - count);
      this.addImageURLs(data);
    });
  };
}

export { AppState };
