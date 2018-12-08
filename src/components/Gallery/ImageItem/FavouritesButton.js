import React from 'react';
import styled from '@emotion/styled';

const FavouritesButtonStyled = styled.button`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 120px;
  height: 120px;
  padding-top: 12px;
  font-size: 64px;

  background: rgba(255, 255, 255, 0.8);
  border: none;

  transition: opacity 0.5s;

  &.btn--hidden {
    opacity: 0;
  }
`;

export const FavouritesButton = ({ visible, isFavourite, onButtonClick }) => (
  <FavouritesButtonStyled
    className={`btn btn-light ${!visible && 'btn--hidden'}`}
    type="button"

  >
    {isFavourite ? '💔' : '❤️'}
  </FavouritesButtonStyled>
);
