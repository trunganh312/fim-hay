import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ListSearch from "../../features/ListSearch";
import "./styles.scss";
function Search() {
  const location = useLocation();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [page, setPagination] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) return;
    navigate({
      pathname: "/search",
      search: `?q=${value}&page=${page}`,
    });

    setShow(true);
  };

  return show ? (
    <ListSearch
      search={location.search}
      setShow={(show) => setShow(show)}
      location={location}
      setPagination={(idx) => setPagination(idx)}
    />
  ) : (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__text">
        Tìm phim và chương trình truyền hình yêu thích của bạn
      </h1>
      <div className="form__search">
        <btn className="form__btn" type="submit">
          <FaSearch />
        </btn>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Tìm kiếm..."
        />
      </div>
    </form>
  );
}

export default Search;
