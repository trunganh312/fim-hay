import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AlbumList from './components/AlbumList';

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhạc Hoa Thịnh Hành',
      thumbnailUrl:
        'https://i1-dulich.vnecdn.net/2021/07/16/2-1626444940.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QBhjEzy_5EIISB2CWDpQlw',
    },
    {
      id: 2,
      name: 'Nhạc Việt',
      thumbnailUrl:
        'https://i1-dulich.vnecdn.net/2021/07/16/2-1626444940.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QBhjEzy_5EIISB2CWDpQlw',
    },
    {
      id: 3,
      name: 'Trào Lưu Nhạc Hot',
      thumbnailUrl:
        'https://i1-dulich.vnecdn.net/2021/07/16/2-1626444940.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QBhjEzy_5EIISB2CWDpQlw',
    },
  ];

  return (
    <div>
      <h2>Có thể bạn yêu thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
