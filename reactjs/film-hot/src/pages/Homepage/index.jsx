import { useEffect, useState } from "react";
import moviesApi from "../../Api/moviesApi";
import PopularSlider from "../../features/Popular";
import Slice from "../../features/Slide";
import TopRateSlider from "../../features/TopRate";
import TrendingSlider from "../../features/Trending";
import TopRateSliderTV from "../../features/TopRateTV";
import TrendingSliderTV from "../../features/TrendingTV";
import PopularSliderTV from "../../features/PopularTV";

function Homepage(props) {
  const [item, setItem] = useState({});
  useEffect(() => {
    document.title = `eCinema - Popular movies in one place`;
  });
  useEffect(() => {
    (async () => {
      const { results } = await moviesApi.getTrending24h();
      setItem(results[0]);
      console.log(results);
    })();
  }, []);
  return (
    <>
      <Slice item={item} />
      <TrendingSlider />
      <PopularSlider />
      <TopRateSlider />
      <TrendingSliderTV />
      <PopularSliderTV />
      <TopRateSliderTV />
    </>
  );
}

export default Homepage;
