import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../features/Details";
import TiviApi from "../../Api/tiviApi";
function DetailsPageTV(props) {
  let { tvId } = useParams();
  const [data, setData] = useState({});
  const [similar, setSimilar] = useState();
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);
  const string = "TV";
  useEffect(() => {
    (async () => {
      const detailsTV = await TiviApi.getDetail(tvId);
      const { results } = await TiviApi.getSimilar(tvId);
      const { cast } = await TiviApi.getCast(tvId);
      const review = await TiviApi.getWatch(tvId);
      setData(detailsTV);
      setSimilar(results);
      setCast(cast);
      setReview(review.results);
    })();
  }, [tvId]);
  useEffect(() => {
    document.title = data.original_name;
  });
  return (
    <>
      <Details
        data={data}
        similar={similar}
        cast={cast}
        review={review}
        string={string}
      />
    </>
  );
}

export default DetailsPageTV;
