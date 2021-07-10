import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "reactstrap";
import "./ImageSlider.css";
import React, { Component } from "react";

export default class ImageSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className="card-wrapper">
          <Card className="slidercard">
            <div className="cards-image">
              <img
                className="slidim"
                src="https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508__340.jpg"
                alt=""
              />

              <div className="details">
                <button>Volunteer</button>
                <h2>hello volunteers</h2>
              </div>
            </div>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card className="slidercard">
            <div className="cards-image">
              <img
                className="slidim"
                src="https://cdn.pixabay.com/photo/2017/05/28/18/59/group-2351896__340.png"
                alt=""
              />

              <div className="details">
                <button>Volunteer</button>
                <h2>hello volunteers</h2>
              </div>
            </div>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card className="slidercard">
            <div className="cards-image">
              <img
                className="slidim"
                src="https://cdn.pixabay.com/photo/2017/09/16/01/41/poor-2754335__340.jpg"
                alt=""
              />

              <div className="details">
                <button>Volunteer</button>
                <h2>hello volunteers</h2>
              </div>
            </div>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card className="slidercard">
            <div className="cards-image">
              <img
                className="slidim"
                src="https://cdn.pixabay.com/photo/2017/07/06/14/44/help-2478193__340.jpg"
                alt=""
              />

              <div className="details">
                <button>Volunteer</button>
                <h2>hello volunteers</h2>
              </div>
            </div>
          </Card>
        </div>
      </Slider>
    );
  }
}
