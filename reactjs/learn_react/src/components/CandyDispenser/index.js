import React from 'react';

export default (function CandyDispenser() {
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way'];
  const [candies, setCandies] = React.useState(initialCandies);
  const dispense = (candy, i) => {
    const newArr = [...candies];
    newArr.splice(i, 1);
    setCandies(newArr);
  };
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map((candy, i) => (
              <li key={candy}>
                <button onClick={() => dispense(candy, i)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});
