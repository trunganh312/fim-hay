import classNames from "classnames";
import React from "react";
import { Link, useParams } from "react-router-dom";
import RatedStar from "../../components/RatedStar/RatedStar";
import "./styles.scss";
function WatchTV({ data, seasons }) {
  const { tvId } = useParams();

  console.log(data);
  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-2">
          <div
            className="watch__img"
            style={{
              width: "200px",
              height: "300px",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="col l-8">
          <div className="watch__text">
            <h2 className="watch__name-x">
              <Link to={`/${data.original_title ? "movie" : "tv"}/${data.id}`}>
                {data.original_title || data.name}
              </Link>
            </h2>

            <p className="watch__introduce">{data.overview}</p>
            <p className="watch__day">
              Ngày phát hành: {data.release_date || data.last_air_date}
            </p>
            <RatedStar
              voteAverage={data.vote_average}
              voteCount={data.vote_count}
            />
          </div>
        </div>
        <div className="col l-12">
          <h2>Seasons</h2>
        </div>
        {seasons.map((item, i) => {
          return (
            <Link
              to={{
                pathname: `/tv/${tvId}/episode`,
                query: {
                  season: item.season_number,
                  episode: item.episode_number,
                },
              }}
              style={{ width: "100%" }}
            >
              <div
                className={classNames({
                  card__seasons: true,
                })}
                key={item.id}
                onClick={() => handleClick(item)}
              >
                <div className="card__seasons--img">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="card__seasons--text">
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.episode_count} Episodes</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default WatchTV;
