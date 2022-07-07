import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { decrease, increase } from './counterSlice';

function CounterFeatures() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  function handleDecrea() {
    const action = decrease();
    dispatch(action);
  }

  function handleIncea() {
    const action = increase();
    dispatch(action);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrea}>Lùi</button>
      <button onClick={handleIncea}>Tiến</button>
    </div>
  );
}

export default CounterFeatures;
