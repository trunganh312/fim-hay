import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TiviApi from "../../Api/tiviApi";
import RatedStar from "../../components/RatedStar/RatedStar";
const queryString = require("query-string");
function Episode({ data, seasons }) {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const [episodeTV, setEpisodeTV] = useState({});
  console.log(parsed);
  const { tvId } = useParams();
  useEffect(() => {
    (async () => {
      //   const seasonsTV = await TiviApi.getTVSeason(tvId, parsed.season);
      const episodeTV = await TiviApi.getTVEpisode(
        tvId,
        parsed.season,
        parsed.episode
      );
      console.log(episodeTV);
      setEpisodeTV(episodeTV);
    })();
  }, [tvId, parsed.episode]);
  console.log(seasons);
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
                allowFullscreen="true"
                frameBorder="0"
                src={`https://2embed.org/embed/series?tmdb=${tvId}&sea=${parsed.season}&epi=${parsed.episode}`}
              ></iframe>
            </div>
          </div>
          <div className="col l-3">
            <h2>Các tập khác</h2>
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
        <p className="watch__day">
          Ngày phát hành: {episodeTV.release_date || episodeTV.last_air_date}
        </p>
        <RatedStar
          voteAverage={episodeTV.vote_average}
          voteCount={episodeTV.vote_count}
        />
      </div>
    </div>
  );
}

export default Episode;
