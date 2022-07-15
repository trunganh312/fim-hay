import { useEffect, useState } from "react";
import TiviApi from "../../Api/tiviApi";
import SliderContent from "../../components/Slider";

TopRateSliderTV.propTypes = {};

function TopRateSliderTV(props) {
  const [topRateTV, setTopRateTV] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await TiviApi.getTopRating();
      setTopRateTV(results);
    })();
  }, []);
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
        Top Rate TV
      </p>
      <SliderContent items={topRateTV} />
    </div>
  );
}

export default TopRateSliderTV;
