import React from 'react';
import styled from '@emotion/styled';

const FavouritesIndicatorStyled = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  transition: opacity 0.5s 0.2s;

  &.favourites-indicator--hidden {
    opacity: 0;
  }
`;
export const FavouritesIndicator = ({ isFavourite }) => (
  <FavouritesIndicatorStyled
    className={`favourites-indicator ${!isFavourite &&
      'favourites-indicator--hidden'}`}
  >
    <span role="img" aria-label="favourite">
      ❤️
    </span>
  </FavouritesIndicatorStyled>
);
