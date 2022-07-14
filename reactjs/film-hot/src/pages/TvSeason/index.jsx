import React from "react";
import { useParams } from "react-router-dom";

function TvSeason() {
  const tvId = useParams();
  console.log(tvId);
  return <div>TvSeason</div>;
}

export default TvSeason;
