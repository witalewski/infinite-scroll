import { observable, action, computed } from 'mobx';
import { Set } from 'immutable';
import { getImageURLs } from './api/shibeAPI';
import {
  storeFavouritesCookie,
  readFavouritesCookie,
} from './utils/cookieUtil';
import { BATCH_SIZE } from './global/constants';
class AppState {
  @observable imageURLs = [];
  @observable placeholdersCount = 0;

  @observable favourites = new Set(readFavouritesCookie());

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

  @action setFavourites = favourites => {
    this.favourites = favourites;
    storeFavouritesCookie(favourites);
  };
  @action addToFavourites = favourite => {
    this.setFavourites(this.favourites.add(favourite));
  };

  @action removeFromFavourites = favourite => {
    this.setFavourites(this.favourites.delete(favourite));
  };

  @computed get images() {
    return [
      ...this.imageURLs,
      ...(new Array(this.placeholdersCount)).fill(''),
    ];
  }

  @action
  requestMoreImages = (count = BATCH_SIZE) => {
    this.setPlaceholdersCount(this.placeholdersCount + count);
    getImageURLs(count).then(({ data }) => {
      this.setPlaceholdersCount(this.placeholdersCount - count);
      this.addImageURLs(data);
    });
  };
}

export { AppState };
