import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

InputValueFeedback.propTypes = {};

function InputValueFeedback({ onChangeInput }) {
  const [num, setNum] = useState('');
  const [text, setText] = useState('');
  const inputRef = useRef();
  function handleClick() {
    const formData = {
      num: Number(num),
      textInput: text
    };

    onChangeInput(formData);
    setText('');
    setNum('');
    inputRef.current.focus();
  }

  return (
    <div>
      Rating:
      <input
        ref={inputRef}
        type="text"
        onChange={e => setNum(e.target.value)}
        value={num}
      />
      <br />
      Text:
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default InputValueFeedback;
