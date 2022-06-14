import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GithubContext } from '../components/context/github/GithubContext';
import './User.scss';
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from 'react-icons/fa';
import ReposList from '../components/Repos/ReposList';
function User() {
  let { login } = useParams();
  console.log(login);
  const { getUser, user, getRepos, repos } = useContext(GithubContext);
  console.log(user);
  useEffect(() => {
    getUser(login);
  }, []);
  useEffect(() => {
    getRepos(login);
  }, []);

  return (
    <div className="grid wide " style={{ paddingBottom: 40 }}>
      <div className="row">
        <div className="col l-12">
          <Link to="/">
            <button className="relative h-[40px] w-[150px] rounded bg-blue-300 hover:border">BACK TO SEARCH</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col l-3">
          <div className="cards" style={{ backgroundImage: `url(${user.avatar_url})` }}>
            <div className="cards__text">
              <h3>{user.name}</h3>
              <h4>{user.login}</h4>
            </div>
          </div>
        </div>
        <div className="col l-9">
          <div className="box">
            <div className="box__title">
              <h4>{user.name}</h4>
              <p className="box__type box__type-green">{user.type}</p>
              {user.hireable && <p className="box__type box__type-hireable">Hireable</p>}
            </div>
            <div className="box__text">{user.bio}</div>
            <a href={user.html_url} target="_blank">
              <button className="button">VISIT GITHUB PROFILE</button>
            </a>
          </div>
          <div className="row">
            {user.location && (
              <div className="col l-4">
                <div className="info ">
                  <h4>Location</h4>
                  <h3>{user.location}</h3>
                </div>
              </div>
            )}
            {user.blog && (
              <div className="col l-4">
                <div className="info ">
                  <h4>Website</h4>
                  <h3>{user.blog}</h3>
                </div>
              </div>
            )}
            {user.twitter_username && (
              <div className="col l-4">
                <div className="info ">
                  <h4>Twitter</h4>
                  <h3>{user.twitter_username}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col l-3">
          <div className="box__follow">
            <div className="box__content">
              <h3>Followers</h3>
              <h4>{user.followers}</h4>
            </div>
            <div className="box__icon">
              <FaUserFriends />
            </div>
          </div>
        </div>
        <div className="col l-3">
          <div className="box__follow">
            <div className="box__content">
              <h3>Following</h3>
              <h4>{user.following}</h4>
            </div>
            <div className="box__icon">
              <FaUsers />
            </div>
          </div>
        </div>
        <div className="col l-3">
          <div className="box__follow">
            <div className="box__content">
              <h3>Public Repos</h3>
              <h4>{user.public_repos}</h4>
            </div>
            <div className="box__icon">
              <FaCodepen />
            </div>
          </div>
        </div>
        <div className="col l-3">
          <div className="box__follow">
            <div className="box__content">
              <h3>Public Gists</h3>
              <h4>{user.public_gists}</h4>
            </div>
            <div className="box__icon">
              <FaStore />
            </div>
          </div>
        </div>
      </div>
      <ReposList repos={repos} />
    </div>
  );
}

export default User;
