import SliderContent from "../../components/Slider";

SimilarSlider.propTypes = {};

function SimilarSlider({ similar }) {
  return (
    <div className="content-movies">
      <p
        style={{
          marginTop: "32px",
          color: "white",
          fontSize: "25px",
          fontWeight: "500",
          textAlign: "left",
          marginLeft: "12px",
        }}
      >
        Similar Movies
      </p>
      <SliderContent items={similar} />
    </div>
  );
}

export default SimilarSlider;
