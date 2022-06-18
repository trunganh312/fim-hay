import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Button from '../share/Button';

function Post() {
  const params = useParams();
  console.log(params);
  const status = 200;
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>Post {params.id}</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default Post;
