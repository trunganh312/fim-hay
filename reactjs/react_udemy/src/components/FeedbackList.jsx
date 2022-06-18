import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FeedbackItem from './FeedbackItem';

FeedbackList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

function FeedbackList({ cards, handleDelete }) {
  return (
    <div className="feedback-list">
      {cards.map((card, index) => (
        <FeedbackItem
          card={card}
          key={index}
          handleClickDel={() => handleDelete(card.id)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
