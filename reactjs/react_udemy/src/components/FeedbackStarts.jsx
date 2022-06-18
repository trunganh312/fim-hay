import PropTypes from 'prop-types';
import React from 'react';

FeedbackStarts.propTypes = {
  cards: PropTypes.array.isRequired
};

function FeedbackStarts({ cards }) {
  console.log(cards);
  let result = cards.reduce((acc, card) => acc + card.rating, 0) / cards.length;
  console.log(result);
  result = result.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{cards.length} Review</h4>
      <h4>Average rating: {isNaN(result) ? 0 : result}</h4>
    </div>
  );
}

export default FeedbackStarts;
