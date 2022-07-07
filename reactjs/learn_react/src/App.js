// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import AlbumFeatures from './features/Album';
import CounterFeatures from './features/Counter';
import ProductFeatures from './features/Product';
import DetailsPage from './features/Product/pages/DetailsPage';
import ListPage from './features/Product/pages/ListPage';
import TodoFeature from './features/Todo';
import ReduxPage from './pages/ReduxPage/ReduxPage';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<CounterFeatures />} />
        <Route path="/album" element={<AlbumFeatures />} />
        <Route path="/todo/*" element={<TodoFeature />} />
        <Route path="/redux" element={<ReduxPage />} />

        <Route path="/product" element={<ProductFeatures />}>
          <Route path=":productId" element={<DetailsPage />} />
          <Route path="/product" element={<ListPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
