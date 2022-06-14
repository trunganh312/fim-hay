import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Alert from './components/context/alert/Alert';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import GithubProvider from './components/context/github/GithubContext';
import { AlertProvider } from './components/context/alert/AlertContext';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className="App ">
          <Navbar />
          <main className=" bg-gray-500" style={{ minHeight: 371 }}>
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
