import { useEffect, useState } from "react";
import moviesApi from "../../Api/moviesApi";
import SliderContent from "../../components/Slider";

TopRateSlider.propTypes = {};

function TopRateSlider(props) {
  const [topRateMovies, setTopRateMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await moviesApi.getTopRating();
      setTopRateMovies(results);
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
        Top Rate Movies
      </p>
      <SliderContent items={topRateMovies} />
    </div>
  );
}

export default TopRateSlider;
