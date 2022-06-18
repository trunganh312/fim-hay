import React from 'react';
import PropTypes from 'prop-types';
import './ReduxList.css';
ReduxList.propTypes = {
  hobbyList: PropTypes.array.isRequired,
};

ReduxList.defaultProps = {
  hobbyList: [],
};

function ReduxList(props) {
  const { hobbyList, onClickActive, actionId } = props;

  const handleClickList = (id) => {
    onClickActive(id);
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => {
        return (
          <li
            key={hobby.id}
            onClick={() => handleClickList(hobby.id)}
            className={hobby.id === actionId ? 'active' : ''}
          >
            {hobby.title}
          </li>
        );
      })}
    </ul>
  );
}

export default ReduxList;
