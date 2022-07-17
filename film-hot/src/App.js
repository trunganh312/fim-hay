import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import DetailsPageMovie from "./pages/DetailsPageMovie";
import DetailsPageTV from "./pages/DetailsPageTV";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import TvSeason from "./pages/TvSeason";
import WatchPageMovie from "./pages/WatchPageMovie";
import WatchPageTV from "./pages/WatchPageTV";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:movieId" element={<DetailsPageMovie />} />
        <Route path="/movie/:movieId/watch" element={<WatchPageMovie />} />
        <Route path="/tv/:tvId" element={<DetailsPageTV />} />
        <Route path="/tv/:tvId/watch" element={<WatchPageTV />} />
        <Route path="/tv/:tvId/episode" element={<TvSeason />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
