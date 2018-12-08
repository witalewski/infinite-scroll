import React from 'react';
import styled from '@emotion/styled';

const OverlayStyled = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 1;

  background: rgba(255, 255, 255, 0.9);

  transition: opacity 0.2s;
  transform: translateY(-50%);

  &.overlay--hidden {
    opacity: 0;
  }

  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Overlay = ({
  mouseOver,
  message,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  undoAction,
}) => (
  <OverlayStyled className={`overlay ${!mouseOver && 'overlay--hidden'}`}>
    {!message ? (
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={isFavourite ? removeFromFavourites : addToFavourites}
      >
        {isFavourite ? '💔 Remove from Favourites' : '❤️ Add to Favourites'}
      </button>
    ) : (
      <div className="message">
        <span>{message}</span>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={undoAction}
        >
          Undo
        </button>
      </div>
    )}
  </OverlayStyled>
);
