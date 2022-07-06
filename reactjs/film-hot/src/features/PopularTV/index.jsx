import { useEffect, useState } from "react";
import TiviApi from "../../Api/tiviApi";
import SliderContent from "../../components/Slider";

PopularSliderTV.propTypes = {};

function PopularSliderTV(props) {
  const [popularTV, setPopularTV] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await TiviApi.getAll();
      setPopularTV(results);
    })();
  }, []);
  console.log(popularTV);
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
        Popular TV
      </p>
      <SliderContent items={popularTV} />
    </div>
  );
}

export default PopularSliderTV;
