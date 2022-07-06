import { useEffect, useState } from "react";
import moviesApi from "../../Api/moviesApi";
import SliderContent from "../../components/Slider";

PopularSlider.propTypes = {};

function PopularSlider(props) {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await moviesApi.getAll();
      setPopularMovies(results);
    })();
  }, []);
  console.log(popularMovies);
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
        Popular Movies
      </p>
      <SliderContent items={popularMovies} />
    </div>
  );
}

export default PopularSlider;
