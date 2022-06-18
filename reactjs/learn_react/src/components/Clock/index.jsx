import React from 'react';
import useClock from '../../hooks/useClock';

function Clock() {
  const { timeString } = useClock();
  return <div style={{ fontSize: '48px' }}>{timeString}</div>;
}

export default Clock;
