import React from "react";

function RatedStar({ voteAverage, voteCount = null }) {
  const length = Math.round(voteAverage) || 10;
  const arrRate = Array.from(new Array(Math.round(length))) || [];
  const arrNoRate = Array.from(new Array(Math.round(10 - length)));
  return (
    <div className="rated">
      {arrRate.map((item, i) => {
        return (
          <span key={i} className="rated__item">
            ★
          </span>
        );
      })}
      {arrNoRate.map((item, i) => {
        return (
          <span key={i} className="norated__item">
            ★
          </span>
        );
      })}
      {voteCount ? `(${voteCount} phiếu)` : ""}
    </div>
  );
}

export default RatedStar;
