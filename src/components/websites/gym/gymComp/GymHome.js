import React from "react";
import gym3 from '../gymImg/gym3.jpg'
import rousel2 from '../gymImg/rousel2.jpg'
import rousel4 from '../gymImg/rousel4.jpg'
import styled from 'styled-components';

const Imag = styled.img`
   height: 120vh;
   width: 100%;
`;
const CarC = styled.div`
    bottom: 380px;
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
    @media(max-width: 768px){
      bottom: 500px;
    }
    @media(max-width: 576px){
      bottom: 300px;
    }
`;
const Head = styled.h5`
    color: #18d26e;
    font-size: 85px;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-top: 25px;
    font-family: 'Moon Dance', cursive;
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
const Par = styled.p`
    width: 60%;
    margin: auto;
    font-size: 24px;
    line-height: 1.9;
    color: #a9a9a9;
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
    background: transparent;
	  border: 2px solid #18d26e;
    padding: 15px 35px;
    margin-top: 15px;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    &:hover {
        color: #000;
        background: #18d26e;
        font-weight: 700;
    }
    @media(max-width: 1280px){
      border: 2px solid #18d26e;
      padding: 12px 30px;
    }
    @media(max-width: 1024px){
      border: 2px solid #18d26e;
      padding: 10px 26px;
    }
    @media(max-width: 992px){
      border: 2px solid #18d26e;
      padding: 12px 30px;
    }
    @media(max-width: 768px){
      border: 2px solid #18d26e;
      padding: 6px 20px;
    }
    @media(max-width: 576px){
      border: 2px solid #18d26e;
      padding: 4px 16px;
      font-size: 12px;
    }
`;


export const GymHome = () => {
  return (
    <div id='gymhome'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Imag src={rousel4} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Be Strong</Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</Par>
             <A href="/" className="">More Info</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={rousel2} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Working Out Hard</Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</Par>
             <A href="/" className="">More Info</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={gym3} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Design Your Body</Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</Par>
             <A href="/" className="">More Info</A>
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
