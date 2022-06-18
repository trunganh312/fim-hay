import React, { useState } from 'react';

TodoForm.propTypes = {};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState('');
  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value,
    };

    onSubmit(formValue);
    setValue('');
  }

  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}

export default TodoForm;
