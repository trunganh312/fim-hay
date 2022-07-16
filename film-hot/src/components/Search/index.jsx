import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";
import { useNavigate, useLocation } from "react-router-dom";
import searchApi from "../../Api/searchApi";
import ListSearch from "../../features/ListSearch";
function Search() {
  const location = useLocation();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) return;
    navigate({
      pathname: "/search",
      search: `?q=${value}&page=1`,
    });

    setShow(true);
  };

  return show ? (
    <ListSearch
      search={location.search}
      setShow={(show) => setShow(show)}
      location={location}
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
