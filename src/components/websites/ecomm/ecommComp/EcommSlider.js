import React from "react";
import banner31 from '../ecommImg/banner31.jpg'
import blog91 from '../ecommImg/blog91.jpg'
import banner41 from '../ecommImg/banner41.jpg'
import styled from 'styled-components';

const Imag = styled.img`
   height: 120vh;
   width: 100%;
`;
const CarC = styled.div`
    bottom: 400px;
    z-index: 2;
    @media(max-width: 1280px){
      bottom: 300px;
    }
    @media(max-width: 1024px){
      bottom: 250px;
    }
    @media(max-width: 992px){
      bottom: 700px;
    }
    @media(max-width: 820px){
      bottom: 550px;
    }
    @media(max-width: 768px){
      bottom: 500px;
    }
    @media(max-width: 576px){
      bottom: 300px;
    }
`;
const Head = styled.h5`
    font-size: 85px;
    color: #cfd1d1;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-top: 25px;
    font-family: "Oswald", sans-serif !important;
    @media(max-width: 1280px){
      font-size: 70px;
    }
    @media(max-width: 1024px){
      font-size: 60px;
    }
    @media(max-width: 992px){
      font-size: 70px;
    }
    @media(max-width: 768px){
      font-size: 60px;
    }
    @media(max-width: 576px){
      font-size: 30px;
    }
`;
const Spa = styled.span`
    color: #00ffe5; 
    @media(max-width: 767px){
      font-size: 40px;
    }
    @media(max-width: 576px){
      font-size: 25px;
    }
`;
const Par = styled.p`
    width: 60%;
    margin: auto;
    font-size: 18px;
    line-height: 1.9;
    @media(max-width: 1280px){
      font-size: 20px;
    }
    @media(max-width: 1024px){
      font-size: 16px;
    }
    @media(max-width: 992px){
      font-size: 18px;
    }
    @media(max-width: 768px){
      font-size: 16px;
    }
    @media(max-width: 576px){
      font-size: 14px;
    }
`;
const A = styled.a`
    text-transform: uppercase;
    background-color: #00ffe5;    
    text-decoration: none;
    padding: 15px 30px;
    display: inline-block;
    color: #000 !important;
    margin-top: 15px;
    border-radius: 0px;
    &:hover {
        color: #000;
        background: #00ffe5;
    }
    @media(max-width: 1280px){
      padding: 12px 30px;
    }
    @media(max-width: 1024px){
      padding: 10px 26px;
    }
    @media(max-width: 992px){
      padding: 12px 30px;
    }
    @media(max-width: 768px){
      padding: 6px 20px;
    }
    @media(max-width: 576px){
      padding: 4px 16px;
      font-size: 12px;
    }
`;


export const EcommSlider = () => {
  return (
    <div id='gymhome'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Imag src={banner41} className="d-block" alt="..." />
          <CarC className="carousel-caption">
             <Head data-aos="fade-right" data-aos-duration="2000">Best <Spa className="" data-aos="fade-right" data-aos-duration="2000"> Collection</Spa></Head>
             <Par data-aos="fade-left" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className=" text-white" data-aos="zoom-in" data-aos-duration="3000">Learn More</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={banner31} className="d-block" alt="..." />
          <CarC className="carousel-caption">
             <Head data-aos="fade-right" data-aos-duration="2000">Best <Spa className="" data-aos="fade-right" data-aos-duration="2000">Price / Offers</Spa></Head>
             <Par data-aos="fade-left" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className="text-white" data-aos="zoom-in" data-aos-duration="3000">Learn More</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={blog91} className="d-block" alt="..." />
          <CarC className="carousel-caption">
             <Head data-aos="fade-right" data-aos-duration="2000">New Season <Spa className="" data-aos="fade-right" data-aos-duration="2000">Buy Now</Spa></Head>
             <Par data-aos="fade-left" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className=" text-white" data-aos="zoom-in" data-aos-duration="2000">Learn More</A>
          </CarC> 
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

