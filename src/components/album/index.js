import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import device from '../../utils/devices';

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  // tablet
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 114px 2fr;
    height: calc(100% - 1em);
  }
`;

const AlbumCover = styled.div`
  display: none;
  // tablet
  @media ${device.tablet} {
    display: block;
    margin: 0.5em;
    border: 1px solid #eef2f7;
    width: 100px;
    height: calc(90px - 1em);
  }
`;

const AlbumImg = styled.img`
  @media ${device.tablet} {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const AlbumHeader = styled.div`
  width: 100%;
  align-self: center;
`;

const AlbumHeaderFont = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', 'Helvetica', 'Arial', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const Album = ({ title = '', cover = '' }) => {
  return (
    <AlbumGrid className="album">
      <AlbumCover className="album-cover">
        <AlbumImg className="album-img" src={cover} alt={title} />
      </AlbumCover>
      <AlbumHeader className="album-header">
        <AlbumHeaderFont className="album-header-font">{title}</AlbumHeaderFont>
      </AlbumHeader>
    </AlbumGrid>
  );
};

Album.propTypes = {
  title: string.isRequired,
  cover: string.isRequired,
};

export default Album;
