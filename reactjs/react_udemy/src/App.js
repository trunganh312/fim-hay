import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import cardsApi from './API/cardsApi';
import AbouticonLink from './components/AbouticonLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStarts from './components/FeedbackStarts';
import Header from './components/Header';
import Post from './components/Post';
import AboutPage from './pages/AboutPage';
import Card from './share/Card';

function App() {
  const [cards, setCards] = useState([]);
  function handleDelete(id) {
    const deleteId = cards.filter(item => item.id !== id);
    setCards(deleteId);
    cardsApi.remove(id);
  }

  function onValueForm(valueObj) {
    cardsApi
      .add(valueObj)
      .then(response => response.data)
      .then(data => setCards([data, ...cards]));
  }

  useEffect(() => {
    const fetchCards = async () => {
      const cardsList = await cardsApi.getAll();
      setCards(cardsList.data);
    };
    fetchCards();
  }, []);

  // // function handleUpdate(card) {
  // //   cardsApi
  // //     .update(card)
  // //     .then(response => response.data)
  // //     .then(data => console.log(data));

  // //   setUpdate({
  // //     item: card,
  // //     edit: true
  // //   });
  // }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm onValueForm={onValueForm} />
                <h1>My App</h1>
                <FeedbackStarts cards={cards} />
                <FeedbackList cards={cards} handleDelete={handleDelete} />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
      <Card>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
      </Card>
      <AbouticonLink />
    </div>
  );
}

export default App;
