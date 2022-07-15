import React from "react";
import "./styles.scss";
function RatedStar5({ voteAverage }) {
  const length = Math.round(voteAverage) || 5;
  const arrRate = Array.from(new Array(Math.round(length))) || [];
  const arrNoRate = Array.from(new Array(Math.round(5 - length)));
  return (
    <div className="rated">
      {arrRate.map((item, i) => {
        return (
          <span key={i} className="rated__item5">
            ★
          </span>
        );
      })}
      {arrNoRate.map((item, i) => {
        return (
          <span key={i} className="norated__item5">
            ★
          </span>
        );
      })}
    </div>
  );
}

export default RatedStar5;
