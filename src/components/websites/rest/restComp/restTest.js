import React from 'react'
import styled from 'styled-components';
import { testi } from '../restCommon/restData';
import img6 from '../restImg/img6.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Test = styled.section`
  padding: 120px 0;
  background: url(${img6}) no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(2, 2, 2, 0.7);
  }

  .section-header {
    margin-bottom: 40px;
  }

  .testimonials-carousel,
  .testimonials-slider {
    overflow: hidden;
  }

  .testimonial-item {
    text-align: center;
    color: #fff;
  }

  .testimonial-item .testimonial-img {
    width: 100px;
    border-radius: 50%;
    border: 6px solid rgba(255, 255, 255, 0.15);
    margin: 0 auto;
  }

  .testimonial-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #fff;
  }

  .testimonial-item h4 {
    font-size: 14px;
    color: #ddd;
    margin: 0 0 15px 0;
  }

  .testimonial-item .quote-icon-left,
  .testimonial-item .quote-icon-right {
    color: rgba(255, 255, 255, 0.4);
    font-size: 26px;
  }

  .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }

  .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }

  .testimonial-item p {
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    margin: 0 auto 15px auto;
    color: #eee;
    line-height: 1.5 !important;
  }

  .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }

  .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 1;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: #8fc04e;
  }

  @media (min-width: 992px) {
    .testimonial-item p {
      width: 80%;
    }
  }
`;
const IconLeft = styled(ImQuotesLeft)`
  color: rgba(255, 255, 255, 0.4);
  font-size: 23px;
  display: inline-block;
  left: -10px;
  top: -10px;
  position: relative;
`;
const IconRight = styled(ImQuotesRight)`
  color: rgba(255, 255, 255, 0.4);
  font-size: 23px;
  display: inline-block;
  display: inline-block;
  right: -10px;
  position: relative;
  top: 3px;
`;

export const RestTest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Test id="resttestimonials" className="testimonials">
      <div className="container">
        <Slider {...settings}>
          {testi.map((val) => (
          <div className="testimonial-item">
            <img src={val.cover} className="testimonial-img" alt="" />
            <h3>{val.name}</h3>
            <h4>{val.job}</h4>
            <p>
              <IconLeft />
                  {val.par}
              <IconRight />
            </p>
          </div>
           ))}
         </Slider>
      </div>
    </Test>
  );
}

