import React, { Component } from "react";
import './style-Carimg.css'
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

class Carimg extends Component {
  state = {};
  render() {
    return (
      <div
        id="carouselFadeExampleIndicators"
        className="carousel slide carousel-fade container"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={img1}
              data-src="holder.js/900x400?theme=social"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={img2}
              data-src="holder.js/900x400?theme=industrial"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={img3}
              data-src="holder.js/900x400?theme=industrial"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselFadeExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselFadeExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carimg;
