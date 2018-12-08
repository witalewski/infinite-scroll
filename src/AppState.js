import { observable, action, computed } from 'mobx';
import { Range, Set } from 'immutable';
import { getImageURLs } from './api/shibeAPI';
import {
  storeFavouritesCookie,
  readFavouritesCookie,
} from './utils/cookieUtil';
class AppState {
  @observable imageURLs = [];
  @observable placeholdersCount = 0;

  @observable favourites = new Set(readFavouritesCookie() || []);

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
      ...Range(0, this.placeholdersCount).map(_ => ''),
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
