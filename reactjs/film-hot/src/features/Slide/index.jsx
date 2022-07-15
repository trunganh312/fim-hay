import { Link } from "react-router-dom";
import "./styles.scss";
function Slice({ item }) {
  return (
    <div
      className="slice "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
        width: "100%",
      }}
    >
      <div className=" wide grid ">
        <div className="row">
          <div
            className="col l-5"
            style={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
            }}
          >
            <div className="slice__content">
              <h1 className="slice__text">{item.original_title}</h1>
              <p>{item.overview}</p>
            </div>
            <div className="slice__btn">
              <Link to={`/movie/${item.id}/watch`}>
                <button className="btn btn--watch">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                  </svg>
                  <span>Watch now</span>
                </button>
              </Link>
              <Link to={`/movie/${item.id}`}>
                <button className="btn btn--info">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                  </svg>
                  <span> View info</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col l-5">
            <div className="slice__img">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slice;
