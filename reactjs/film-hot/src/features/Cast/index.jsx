import React from "react";
import "./styles.scss";
function Cast({ cast }) {
  const castNotNull = cast.filter((item) => item.profile_path !== null);
  console.log(castNotNull);
  const newCast = castNotNull.slice(0, 10);
  console.log(newCast);
  return (
    <div className="flex">
      {newCast.map((item, i) => {
        return (
          <div className="card--cast" key={item.id}>
            <div className="card--cast__img">
              <img
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                alt=""
              />
            </div>
            <div className="card--cast__text">
              <p>{item.name}</p>
              <h6>{item.character}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cast;
