import { useReducer } from 'react';
import React from 'react';
import { Context } from './Context';
import reducer, { initState } from './reducer';

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default StoreProvider;
