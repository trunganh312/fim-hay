import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TiviApi from "../../Api/tiviApi";
import Episode from "../../features/Episode";

function TvSeason() {
  const { tvId } = useParams();
  const [data, setData] = useState({});
  const [seasons, setSeasons] = useState([]);
  useEffect(() => {
    (async () => {
      const detailsTV = await TiviApi.getDetail(tvId);
      setData(detailsTV);
      setSeasons(detailsTV.seasons);
    })();
  }, [tvId]);
  useEffect(() => {
    document.title = data.original_name;
  });
  return <Episode data={data} seasons={seasons} />;
}

export default TvSeason;
