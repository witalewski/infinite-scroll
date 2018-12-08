import React from 'react';
import { observer, inject } from 'mobx-react';
import { Gallery } from './Gallery';

export const NewPhotosView = ({ images, requestMoreImages }) => (
  <Gallery
    infinite
    title="New Photos"
    images={images}
    requestMoreImages={requestMoreImages}
  />
);

export default inject(({ appState }) => ({
  images: appState.images,
  requestMoreImages: appState.requestMoreImages,
}))(observer(NewPhotosView));
