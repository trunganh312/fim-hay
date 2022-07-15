import React, { useState } from "react";
import { Link } from "react-router-dom";
import RatedStar from "../../components/RatedStar/RatedStar";
import Cast from "../Cast";
import SimilarSlider from "../Similar";
import Trailer from "../Trailer";
import "./styles.scss";

function Details({ data = {}, similar, cast, review, string }) {
  const voteAverage = data.vote_average;
  const voteCount = data.vote_count;
  const [show, setShow] = useState(false);
  const handleClickShowDialog = (stt) => {
    setShow(stt);
  };
  return (
    <div className="details">
      <div
        className="details__bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      ></div>
      <div
        className="grid wide"
        style={{
          marginTop: "190px",
        }}
      >
        <div className="row">
          <div className="col l-3">
            <div className="details__img">
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="col l-7">
            <div className="content">
              <div className="btn__group" style={{ display: "flex" }}>
                <Link
                  to={`/${data.original_title ? "movie" : "tv"}/${
                    data.id
                  }/watch`}
                >
                  <button
                    className="btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "25px",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "10px" }}
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                    </svg>
                    Xem bây giờ
                  </button>
                </Link>
                <button
                  className="btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    handleClickShowDialog(true);
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                  Xem đoạn giới thiệu
                </button>
              </div>
              <h2 className="name">{data.original_title || data.name}</h2>
              <p className="introduce">{data.overview}</p>
              <p className="day">
                Ngày phát hành: {data.release_date || data.last_air_date}
              </p>
              <div className="action">
                {data.genres?.map((gen) => {
                  return <p key={gen.id}>{gen.name}</p>;
                })}
              </div>
              <RatedStar voteAverage={voteAverage} voteCount={voteCount} />
            </div>
          </div>
        </div>
      </div>
      {data.hompage || (
        <p className="web">
          Trang web chính thức :
          <a href={data.homepage} target="_blank">
            {data.homepage}
          </a>
        </p>
      )}
      <Cast cast={cast} />
      <SimilarSlider similar={similar} />
      {show && (
        <Trailer
          review={review}
          onClickClose={handleClickShowDialog}
          string={string}
        />
      )}
    </div>
  );
}

export default Details;
