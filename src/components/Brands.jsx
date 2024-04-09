import React from 'react';
import Slider from 'react-slick';

export default function Brands({ data }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 40000,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
     
    ],
  };
  return (
    <div className="py-1 py-md-1 brand-section gray-bg">
      <div
        className="container"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <Slider {...settings} className="slider-gap-50">
          {data.map((item, index) => (
            <div key={index}>
              <div  className="moveText pt-3 pb-3 text-center d-flex align-items-center justify-content-center w-100">
                {/* <img src={item.src} alt={item.alt} className="w-100" /> */}
              <h3>ברוכים הבאים למחולל הכותרות</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
