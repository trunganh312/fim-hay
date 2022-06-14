import React, { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/github/GithubContext';

import Loading from '../../Loading/Loading';
import UserItem from '../UserItem/UserItem';

UserList.propTypes = {};

function UserList(props) {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid wide">
        <div className="row">
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default UserList;
