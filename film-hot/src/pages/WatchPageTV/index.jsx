import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TiviApi from "../../Api/tiviApi";
import WatchTV from "../../features/WatchTV";
WatchPageTV.propTypes = {};

function WatchPageTV() {
  let { tvId } = useParams();
  const [data, setData] = useState({});
  const [seasons, setSeasons] = useState([]);
  useEffect(() => {
    (async () => {
      const detailsTV = await TiviApi.getDetail(tvId);
      setData(detailsTV);
      setSeasons(detailsTV.seasons);
      console.log(detailsTV.seasons);
    })();
  }, [tvId]);
  useEffect(() => {
    document.title = data.original_name;
  });
  return (
    <>
      <WatchTV data={data} seasons={seasons} />
    </>
  );
}

export default WatchPageTV;
