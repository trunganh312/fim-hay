import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./styles.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
SliderContent.propTypes = {
  items: PropTypes.array,
};

function SliderContent({ items = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  return (
    <div className="slider">
      <btn className="btn__prev" onClick={previous}>
        <FaAngleLeft />
      </btn>
      <Slider ref={ref} {...settings}>
        {items.map((item) => {
          return (
            <Link
              to={`/${item.original_title ? "movie" : "tv"}/${item.id}`}
              key={item.id}
            >
              <div className="card">
                <div className="card__img">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                    style={{
                      width: "200px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className="card__text">
                  {item.original_title || item.original_name}
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
      <btn className="btn__next" onClick={next}>
        <FaAngleRight />
      </btn>
    </div>
  );
}

export default SliderContent;
