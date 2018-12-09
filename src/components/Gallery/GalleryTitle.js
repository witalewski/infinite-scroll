import React from 'react';
import styled from '@emotion/styled';

const GalleryTitleStyled = styled.div`
.title {
    margin: 36px 0 24px;
    text-align: center;
}
`;

export const GalleryTitle = ({ title }) => (
  <GalleryTitleStyled className="row">
    <div className="col">
      <h1 className="title">{title}</h1>
    </div>
  </GalleryTitleStyled>
);
