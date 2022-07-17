import Pagination from "@mui/material/Pagination";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchApi from "../../Api/searchApi";
function ListSearch({ search, setShow, location, setPagination }) {
  const parsed = queryString.parse(search);
  if (location.search === "") {
    setShow(false);
  } else {
    setShow(true);
  }
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const data = await searchApi.getSearch({
        query: parsed.q,
        page: page,
      });

      setData(data);
    })();
  }, [page, parsed.q]);

  useEffect(() => {
    document.title = `${parsed.q} - Search - eCinema`;
  });

  const handleChange = (e, value) => {
    setPage(value);
    setPagination(value);
    navigate({
      pathname: "/search",
      search: `?q=${parsed.q}&page=${value}`,
    });
  };

  const newArrSearch = data?.results?.filter((item) => {
    return item.known_for_department === undefined && item.poster_path !== null;
  });

  return (
    <div className="grid wide">
      <div className="row">
        <div className="search">
          <h2>
            Kết quả tìm kiếm cho "{parsed.q}" (tìm thấy {data.total_results} kết
            quả)
          </h2>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "120px" }}>
        {newArrSearch?.map((item) => {
          return (
            <Link
              to={`/${item.original_title ? "movie" : "tv"}/${item.id}`}
              key={item.id}
            >
              <div className="col l-2" key={item?.id}>
                <div
                  className="card"
                  style={{
                    marginTop: "25px",
                  }}
                >
                  <div className="card__img">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${
                        item?.poster_path || item?.backdrop_path
                      }`}
                      alt=""
                      style={{
                        width: "200px",
                        height: "300px",
                      }}
                    />
                  </div>
                  <div className="card__text">
                    {item?.original_title || item?.original_name}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="col l-12 pagination">
          <Pagination
            count={data.total_pages}
            color="primary"
            onChange={handleChange}
            page={page}
            size="large"
            variant="text"
          />
        </div>
      </div>
    </div>
  );
}

export default ListSearch;
