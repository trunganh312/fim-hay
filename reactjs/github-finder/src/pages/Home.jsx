import React from 'react';
import UserList from '../components/Users/UserList/UserList';
import UserSearch from '../components/Users/UserSearch/UserSearch';

function Home(props) {
  return (
    <>
      <UserSearch />
      <UserList />
    </>
  );
}

export default Home;
