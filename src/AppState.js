import { observable, action, computed } from 'mobx';
import { getImageURLs } from './api/shibeAPI';
class AppState {
  @observable imageURLs = [];
  @observable isLoadingImageURLs = false;

  @action
  setImageURLs = imageURLs => {
    this.imageURLs.replace(imageURLs);
  };
  @action setIsLoadingImageURLs = isLoadingImageURLs => {
    this.isLoadingImageURLs = isLoadingImageURLs;
  };
  @action
  loadImageURLs = count => {
    this.setIsLoadingImageURLs(true);
    getImageURLs(count).then(({ data }) => {
      this.setImageURLs([...this.imageURLs, ...data]);
      this.setIsLoadingImageURLs(false);
    });
  };
}

export { AppState };
