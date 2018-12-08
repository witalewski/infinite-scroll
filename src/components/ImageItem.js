import React from 'react';

export const ImageItem = ({ image, onImageLoad }) =>
  image.isPlaceholder ? (
    <div className="image-placeholder" />
  ) : (
    <img
      className="image"
      alt="Shibe dog"
      src={image.url}
      decoding="async"
      onLoad={onImageLoad}
    />
  );
