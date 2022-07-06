import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import DetailsPageMovie from "./pages/DetailsPageMovie";
import DetailsPageTV from "./pages/DetailsPageTV";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movie/:movieId" element={<DetailsPageMovie />} />
        <Route path="/tv/:tvId" element={<DetailsPageTV />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
