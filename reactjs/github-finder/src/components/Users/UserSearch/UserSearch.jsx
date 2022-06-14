import React, { useContext, useState } from 'react';
import { GithubContext } from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
function UserSearch(props) {
  const [text, setText] = useState('');
  const { users, dispatch, axiosUsers, clearUser, setLoading } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something');
    }
    axiosUsers({ q: text });
  };

  const handleClear = (e) => {
    clearUser();
    setText('');
  };

  return (
    <div className="l-4 l-o-4 p">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative mt-9">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
