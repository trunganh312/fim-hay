import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../share/Card';
import Button from '../share/Button';
import RatingSelect from './RatingSelect';

FeedbackForm.propTypes = {};
function FeedbackForm({ onValueForm }) {
  const ratingRef = useRef(10);
  const [text, setText] = useState('');
  // const [rating, setRating] = useState(10);
  const textRef = useRef();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  function handleChange(e) {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Độ dài trên 10 kí tự');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      rating: ratingRef.current,
      text
    };
    setText('');
    textRef.current.focus();
    onValueForm(formData);
  }

  function onChangeValue(rating) {
    ratingRef.current = rating;
    // setRating(rating);
  }

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate this feedback?</h2>
        <RatingSelect onChangeValue={onChangeValue} />
        <div className="input-group">
          <input
            ref={textRef}
            type="text"
            placeholder="Write enter"
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
