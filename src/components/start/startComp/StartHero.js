import React from 'react'
import styled from 'styled-components'
import land from '../startImg/land.jpg';
import land1 from '../startImg/land1.jpg'
import land2 from '../startImg/land2.jpg'


const Hero = styled.section`
  width: 100%;
  max-width: 120%;
  height: 100vh;
  background-image: url(${land});
  background-size: cover;
  position: relative;
  background-position: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
		background-image: url(${land1});
    padding-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
		background-image: url(${land2});
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    background-image: url(${land});
  }
`;
const Container = styled.div`
  position: relative;
  padding-top: 150px;
`;
const Head = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 992px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;
const Spam = styled.span`
  color: #00ff8c;
  font-family: "Oswald", sans-serif !important;
  font-size: 52px;
  @media screen and (max-width: 992px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;
const Headh2 = styled.h2`
  color: #fff;
  margin: 5px 0 30px 0;
  font-size: 24px;
  font-weight: 400;
  @media screen and (max-width: 992px) {
    margin: 5px 0 10px;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
const Parr = styled.p`
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 992px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;
const BtnStart = styled.a`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 4px;
  transition: 0.5s;
  color: #000;
  background: #00ff8c;
  &:hover {
    background: #00ff8c;
    font-weight: bold;
    color: #000;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px; 
    padding: 8px 20px; 
  }
  @media screen and (max-width: 576px) {
    font-size: 10px; 
    padding: 6px 16px; 
  }
`;


export const StartHero = () => {
  return (
    <div>
       <Hero id="hero" className="home d-flex align-items-center">
          <Container className="container" data-aos="zoom-out" data-aos-delay="100">
             <Head>Welcome to <Spam>makeItHappen!!!</Spam></Head>
             <Headh2>Frontend Web Development Site</Headh2>
             <Parr>The mission of this website and its creator is the design and development
                   of websites <br /> for commercial purposes, using Html, Css, Bootstrap, JavaScript and React JS, as technologies <br /> for its creation, with a constant and never-ending focus on learning through experience...</Parr>
             <div className="d-flex">
                <BtnStart href="#about" className="btn-get-started scrollto">Get Started</BtnStart>
             </div>
          </Container>
       </Hero>
    </div>
  )
}

