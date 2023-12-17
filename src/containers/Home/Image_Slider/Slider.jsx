import React, { useEffect, useState } from "react";
// comeing imageSlider to imageSlider object
import imageSlider from "./data";
import "./slider.css";
function Slider() {
  const [currentStatue, setCurrentStatue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatue((prevStatue) => (prevStatue + 1) % imageSlider.length);
    }, 3000); // Adjust this value to change the interval duration (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  const goToNext = (index) => {
    setCurrentStatue(index);
  };
  const bgImageStyle = {
    backgroundImage: `url(${imageSlider[currentStatue].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <div className="constainer_Style">
      <div style={bgImageStyle}>
        <div className="description">
          <div>
            <h1>{imageSlider[currentStatue].title}</h1>
          </div>
          <div>
            <p>{imageSlider[currentStatue].body}</p>
          </div>
          <div className="carousel-bullet">
            {imageSlider.map((slider, index) => (
              <span
                key={index}
                className={index === currentStatue ? "active" : ""}
                onClick={() => goToNext(index)}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
