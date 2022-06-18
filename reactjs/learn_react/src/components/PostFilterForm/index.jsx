import React, { useRef, useState } from 'react';

function PostFiterForm(props) {
  const { onSubmitSearch } = props;

  const [value, setValue] = useState('');
  const typingTimeout = useRef(null);
  function handleOnChange(e) {
    setValue(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      const formValue = {
        value: value,
      };
      onSubmitSearch(formValue);
    }, 500);
  }

  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange} />
    </form>
  );
}

export default PostFiterForm;
