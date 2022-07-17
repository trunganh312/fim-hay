import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TiviApi from "../../Api/tiviApi";
import RatedStar from "../../components/RatedStar/RatedStar";
import "./styles.scss";
import classNames from "classnames";
const queryString = require("query-string");

function Episode({ data, seasons }) {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const [episodeTV, setEpisodeTV] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [data1, setData1] = useState({});
  const { tvId } = useParams();
  useEffect(() => {
    (async () => {
      const data = await TiviApi.getTVSeason(tvId, parsed.season);
      const episodeTV = await TiviApi.getTVEpisode(
        tvId,
        parsed.season,
        parsed.episode
      );

      setEpisodes(data.episodes);
      setData1(data);
      setEpisodeTV(episodeTV);
    })();
  }, [tvId, parsed.episode, parsed.season]);
  const ss = seasons[0];
  const newSeason = seasons.filter(
    (item) => item.season_number !== Number(parsed.season)
  );
  return (
    <div className="watch">
      <div className="grid wide">
        <div className="row">
          <div className="col l-8">
            <div className="watch__frame">
              <iframe
                id="ve-iframe"
                width="100%"
                scrolling="no"
                height="500px"
                allowFullScreen={true}
                frameBorder="0"
                src={`https://2embed.org/embed/series?tmdb=${tvId}&sea=${parsed.season}&epi=${parsed.episode}`}
              ></iframe>
            </div>
          </div>
          <div className="col l-3">
            <div className="scr">
              <h2>Các tập khác</h2>

              <div
                className={classNames({
                  "card-ss": true,
                  active: Number(parsed.season) === data1.season_number,
                })}
              >
                <div className="card-ss__img">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${
                      ss?.poster_path || ss?.backdrop_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="card-ss__text">
                  <h3>{data1.name}</h3>
                </div>
              </div>
              {episodes.map((epi, i) => {
                return (
                  <Link
                    to={`/tv/${tvId}/episode?season=${parsed.season}&episode=${epi?.episode_number}`}
                    key={epi.id}
                  >
                    <div
                      className={classNames({
                        "card--epi": true,
                        active: Number(parsed.episode) === epi?.episode_number,
                      })}
                    >
                      <div className="card--epi__img">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${epi.still_path}`}
                          alt=""
                        />
                      </div>
                      <div className="card--epi__text">
                        <h3>Episode {epi.episode_number}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="watch__text">
        <h2 className="watch__name-x">
          <Link to={`/${data.original_title ? "movie" : "tv"}/${data.id}`}>
            {data.original_title || data.name}
          </Link>
        </h2>

        <h2>{episodeTV.name}</h2>

        <p className="watch__introduce">{episodeTV.overview}</p>
        <p className="watch__day">Ngày phát hành: {episodeTV.air_date}</p>
        <RatedStar
          voteAverage={episodeTV.vote_average}
          voteCount={episodeTV.vote_count}
        />
      </div>
      <div className="watch__seasons">
        <h2 style={{ marginLeft: "10px" }}>Các phần khác</h2>
        <div className="content__watch">
          {newSeason.map((item, i) => {
            return (
              <Link
                key={item.id}
                to={{
                  pathname: `/tv/${tvId}/episode?season=${
                    item.season_number
                  }&episode=${item.episode_number || 1}`,
                }}
                style={{ width: "100%" }}
              >
                <div
                  className={classNames({
                    card__seasons: true,
                  })}
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
    </div>
  );
}

export default Episode;
