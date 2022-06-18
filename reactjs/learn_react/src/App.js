// import './App.css';
import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import productsApi from './API/productApi';
import AlbumFeatures from './features/Album';
import CounterFeatures from './features/Counter';
import TodoFeature from './features/Todo';
import ReduxPage from './pages/ReduxPage/ReduxPage';
import Header from './components/Header/index';

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productsApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<CounterFeatures />} />
        <Route path="/album" element={<AlbumFeatures />} />
        <Route path="/todo/*" element={<TodoFeature />} />
        <Route path="/redux" element={<ReduxPage />} />
      </Routes>
    </div>
  );
}

export default App;
