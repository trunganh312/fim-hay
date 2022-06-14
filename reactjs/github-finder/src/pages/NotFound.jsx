import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className="notfound hero-content flex-col h-full">
      <h1 className="text-7xl font-bold text-white">Oops!</h1>
      <h2 className="text-3xl  text-white font-semibold mt-5">404 - Page Not Found</h2>
      <Link to="/" className="btn btn-primary mt-6">
        <FaHome className="mr-2" />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
