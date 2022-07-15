import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesApi from "../../Api/moviesApi";
import Watch from "../../components/Watch";

WatchPageMovie.propTypes = {};

function WatchPageMovie(props) {
  let { movieId } = useParams();
  const [data, setData] = useState({});
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    (async () => {
      const detailsMovie = await moviesApi.getDetail(movieId);
      const { results } = await moviesApi.getRecommended(movieId);
      setData(detailsMovie);
      setRecommend(results);
    })();
  }, [movieId]);
  useEffect(() => {
    document.title = data.original_title;
  });
  return (
    <>
      <Watch data={data} recommend={recommend} />
    </>
  );
}

export default WatchPageMovie;
