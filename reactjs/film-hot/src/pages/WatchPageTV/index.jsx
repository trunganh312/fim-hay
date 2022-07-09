import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TiviApi from "../../Api/tiviApi";
import WatchTV from "../../features/WatchTV";
WatchPageTV.propTypes = {};

function WatchPageTV(props) {
  let { tvId } = useParams();
  const [data, setData] = useState({});
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    (async () => {
      const detailsTV = await TiviApi.getDetail(tvId);
      const { results } = await TiviApi.getRecommended(tvId);
      setData(detailsTV);
      setRecommend(results);
      console.log(detailsTV);
    })();
  }, [tvId]);
  useEffect(() => {
    document.title = data.original_name;
  });
  return (
    <>
      <WatchTV data={data} recommend={recommend} />
    </>
  );
}

export default WatchPageTV;
