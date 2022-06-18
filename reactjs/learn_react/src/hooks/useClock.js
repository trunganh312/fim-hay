import React from 'react';

function formatData(now) {
  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);
  const currentTimeString = `${hours}:${minutes}:${seconds}`;
  return currentTimeString;
}

function useClock() {
  const [timeString, setTimeString] = React.useState(null);
  const intervalRef = React.useRef(null);
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const currentTimeString = formatData(now);
      setTimeString(currentTimeString);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return { timeString };
}

export default useClock;
