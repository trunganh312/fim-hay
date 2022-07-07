import { Link } from "react-router-dom";
import RatedStar from "../RatedStar/RatedStar";
import RatedStar5 from "../RatedStar5/RatedStar";
import "./styles.scss";
function Watch({ data, recommend }) {
  const newArrRecommend = recommend.slice(0, 10);
  const newArrRecommendNotNull = newArrRecommend.filter(
    (item) => item.backdrop_path !== null
  );
  console.log(newArrRecommendNotNull);
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
                allowfullscreen="true"
                frameBorder="0"
                src={`https://2embed.org/embed/${data.imdb_id}`}
              ></iframe>
            </div>
          </div>
          <div className="col l-3">
            <div className="watch__recommend">
              <h2>Recommended movie</h2>
              {recommend.map((item) => {
                return (
                  <Link
                    to={`/${item.original_title ? "movie" : "tv"}/${item.id}`}
                    key={item.id}
                  >
                    <div className="watch__card">
                      <div className="watch__img">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                          alt=""
                        />
                      </div>
                      <div className="watch__content">
                        <div className="watch__name">{item.original_title}</div>
                        <RatedStar5 voteAverage={item.vote_average / 2} />
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
  );
}

export default Watch;
