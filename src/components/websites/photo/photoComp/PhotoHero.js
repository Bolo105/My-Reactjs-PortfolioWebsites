import React from 'react'
import styled from 'styled-components'
import landing1 from '../photoImg/landing1.jpg';

const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${landing1});
  background-size: cover;
  position: relative;
  text-align: center;
`;
const Container = styled.div`
  position: relative;
  padding-top: 150px;
`;
const Head = styled.h1`
  margin-bottom: 15px;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

const Parr = styled.p`
  font-size: 18px;
  color: #fff;
`;
const BtnStart = styled.a`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 4px;
  transition: 0.5s;
  color: #000;
  background: #56b8e6;
  margin-right: 15px;
  &:hover {
    background: #56b8e6;
    font-weight: bold;
    color: #000;
  }
`;


function PhotoHero() {
  return (
    <div>
       <Hero id="photohero" className="home d-flex align-items-center">
          <Container className="container" data-aos="zoom-out" data-aos-delay="100">
             <Head>My Photography Agency</Head>
             <Parr>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut.</Parr>
             <div className="">
                <BtnStart href="#about" className="btn-get-started scrollto">Read More</BtnStart>
                <BtnStart href="#about" className="btn-get-started scrollto">Cameras</BtnStart>
             </div>
          </Container>
       </Hero>
    </div>
  )
}

export default PhotoHero;