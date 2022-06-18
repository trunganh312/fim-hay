import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {};

function AlbumItem({ album }) {
  console.log(album);
  return (
    <li>
      <p>{album.name}</p>
      <img src={album.thumbnailUrl} alt="" />
    </li>
  );
}

export default AlbumItem;
