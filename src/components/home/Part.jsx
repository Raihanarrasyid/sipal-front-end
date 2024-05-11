import React, { useState } from "react";
import Slider from "react-slick";

function Part() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        <div>
          <img
            src="/ampera.jpg"
            alt=""
            className="w-full h-[35rem] object-cover"
          />
        </div>
        <div>
          <img
            src="/bkb.png"
            alt=""
            className="w-full h-[35rem] object-cover"
          />
        </div>
        <div>
          <img src="/ki.jpg" alt="" className="w-full h-[35rem] object-cover" />
        </div>
        <div>
          <img
            src="/amanzi.jpg"
            alt=""
            className="w-full h-[35rem] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Part;
