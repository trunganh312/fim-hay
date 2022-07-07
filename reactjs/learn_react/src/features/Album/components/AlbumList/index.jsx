import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AlbumItem from '../AlbumItem';
AlbumList.propTypes = {};

function AlbumList({ albumList }) {
  console.log(albumList);
  return (
    <ul>
      {albumList.map((album, idx) => (
        <AlbumItem album={album} key={idx} />
      ))}
    </ul>
  );
}

export default AlbumList;
