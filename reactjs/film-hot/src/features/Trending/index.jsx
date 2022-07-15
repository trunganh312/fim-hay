import { useEffect, useState } from "react";
import moviesApi from "../../Api/moviesApi";
import SliderContent from "../../components/Slider";

TrendingSlider.propTypes = {};

function TrendingSlider(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await moviesApi.getTrending24h();
      setTrendingMovies(results);
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
        Trending Movies
      </p>
      <SliderContent items={trendingMovies} />
    </div>
  );
}

export default TrendingSlider;
