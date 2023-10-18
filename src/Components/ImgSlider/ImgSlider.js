import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImgSlider.css'
function ImgSlider() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true
  };
  return (
    <Slider {...settings}>
      <div id='slider_container'>
        <img className='slider_img' src="/Images/slider-badging.jpg" alt="" />
      </div>
      <div id='slider_container'>
      <img className='slider_img' src="/Images/slider-badag.jpg" alt="" />
      </div>
      <div id='slider_container'>
      <img className='slider_img' src="/Images/slider-scale.jpg" alt="" />
      </div>
    </Slider>
  );
}
export default ImgSlider;
