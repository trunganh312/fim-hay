import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../features/Details";
import TiviApi from "../../Api/tiviApi";
function DetailsPageTV(props) {
  let { tvId } = useParams();
  const [data, setData] = useState({});
  const [similar, setSimilar] = useState();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    (async () => {
      const detailsTV = await TiviApi.getDetail(tvId);
      const { results } = await TiviApi.getSimilar(tvId);
      const { cast } = await TiviApi.getCast(tvId);
      setData(detailsTV);
      setSimilar(results);
      setCast(cast);
      console.log(detailsTV);
    })();
  }, [tvId]);
  useEffect(() => {
    document.title = data.original_name;
  });
  console.log(data);
  return (
    <>
      <Details data={data} similar={similar} cast={cast} />
    </>
  );
}

export default DetailsPageTV;
