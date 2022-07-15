import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "./styles.scss";
function Trailer({ review, onClickClose, string }) {
  return (
    <div
      className="modal"
      onClick={() => {
        onClickClose(false);
      }}
    >
      <div className="trailer">
        <div className="trailer__header">
          <h2>Trailer {string}</h2>
          <button
            className="trailer__btn"
            onClick={() => {
              onClickClose(false);
            }}
          >
            <MdOutlineClose />
          </button>
        </div>
        <div className="trailer__content">
          {review.map((item) => {
            return (
              <div className="trailer__item" key={item.id}>
                <h3 style={{ textAlign: "left" }}>{item.name}</h3>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trailer;
