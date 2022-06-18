import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './components/ThemeContext/ThemeContext';
import StoreProvider from './components/Store/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function emmitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Noi dung cmt cua lesson ${id}`,
//       })
//     );
//   }, 2000);
// }

// emmitComment(1);
// emmitComment(2);
// emmitComment(3);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
