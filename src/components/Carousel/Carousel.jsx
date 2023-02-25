import React from 'react'
// import '../../App'
import { Button } from './../Button'
import './Carousel.css'

function HomepageSlider() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="center-block"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src="https://www.aptechvietnam.vn/img/ban-bg11.jpg "
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="center-block"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src=" https://www.aptechvietnam.vn/img/ban-bg10.jpg "
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="center-block"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src=" https://www.aptechvietnam.vn/img/ban-bg7.jpg"
            alt=""
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default HomepageSlider
