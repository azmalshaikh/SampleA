import React from 'react';
import "./Carousel.css";
import LeftIcon from "./images/LeftIcon.png";
import RightIcon from "./images/RIghtIcon.png";
import Carousel1 from "./images/carousel.jpeg";
import Carousel2 from "./images/rooms3.webp";
import Carousel3 from "./images/carousel1.jpg";

function Carousel() {

  let images = [Carousel1, Carousel2, Carousel3];
  let i = 0;

  // Dynamically link our src path from our js
  function setImage() {
    document.slide.src = images[i];
  }

  // Automatic Slide
  function slideImg() {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    setImage();
    setTimeout(slideImg, 5000);
  }

  window.onload = slideImg;

  // Right Button
  const rightButton = () => {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    setImage();
  }

  // Left Button
  const leftButton = () => {
    if (i > 0) {
      i--;
    } else {
      i = images.length - 1;
    }

    setImage();
  }

  return (
    <div className="carousel">
      <div className="carousel__imagesTransition">
        <img name='slide' className="carousel__image" id="#gallery" />
      </div>

      <a className="carousel__leftButton">
        <span className="carousel__leftButtonSymbol">
          <img src={LeftIcon} alt="Left Icon" height="50" width="auto" onClick={leftButton}/>
        </span>
      </a>

      <a className="carousel__rightButton">
        <span className="carousel__rightButtonSymbol">
          <img src={RightIcon} alt="Right Icon" height="50" width="auto" onClick={rightButton}/>
        </span>
      </a>
    </div>
  );
}

export default Carousel;
