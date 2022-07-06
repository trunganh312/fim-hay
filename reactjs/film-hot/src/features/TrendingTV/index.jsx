import { useEffect, useState } from "react";
import TiviApi from "../../Api/tiviApi";
import SliderContent from "../../components/Slider";

TrendingSliderTV.propTypes = {};

function TrendingSliderTV(props) {
  const [trendingTV, setTrendingTV] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await TiviApi.getTrending24h();
      setTrendingTV(results);
    })();
  }, []);
  console.log(trendingTV);
  return (
    <div className="content-movies">
      <p
        style={{
          marginTop: "32px",
          color: "white",
          fontSize: "25px",
          fontWeight: "500",
          textAlign: "left",
          marginLeft: "12px",
        }}
      >
        Trending TV
      </p>
      <SliderContent items={trendingTV} />
    </div>
  );
}

export default TrendingSliderTV;
