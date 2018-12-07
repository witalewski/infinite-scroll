import { observable, action, computed } from 'mobx';
import { getImageURLs } from './api/shibeAPI';
class AppState {
  @observable imageURLs = [];
  
  @action
  setImageURLs = imageURLs => {
    this.imageURLs.replace(imageURLs);
  }
  @action
  loadImageURLs = count => {
    getImageURLs(count).then(({data}) => {
      this.setImageURLs([...this.imageURLs,...data]);
    })
  }
}

export { AppState };
