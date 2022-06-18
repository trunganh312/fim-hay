import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import Card from '../share/Card';
import React from 'react';

FeedbackItem.propTypes = {
  card: PropTypes.object.isRequired
};

function FeedbackItem({ card, handleClickDel }) {
  const animt = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });

  return (
    <animated.div style={animt}>
      <Card>
        <div className="num-display">{card.rating}</div>
        <button className="close" onClick={() => handleClickDel()}>
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{card.text}</div>
      </Card>
    </animated.div>
  );
}

export default FeedbackItem;
