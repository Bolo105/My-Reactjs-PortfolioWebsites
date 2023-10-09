import React from 'react'
import about3 from '../startImg/about3.jpg';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Section = styled.section`
   overflow: hidden;
   padding-top: 90px;
   margin: 30px 30px;
`;

const HeadH2 = styled.h2`
   font-size: 14px;
   font-weight: 500;
   padding: 0;
   line-height: 1px;
   margin: 0 0 5px 0;
   letter-spacing: 2px;
   color: #aaaaaa;
   font-family: "Poppins", sans-serif;
   &:after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #1acc8d;
    margin: 4px 10px;
   }
`;
const SecTitle = styled.div`
   padding-bottom: 0px;
   margin: 0;
`;
const ParTitle = styled.p`
   margin: 0;
   padding: 0;
   font-size: 30px;
   font-weight: bold !important;
   text-transform: uppercase;
   font-family: "Poppins", sans-serif;
   color: #010483;
`;
const Imag = styled.img`
  border-radius: 15px;
`;
const BtnResume = styled.a`
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
  cursor: pointer;
  &:hover {
    background: #00ff8c;
    font-weight: bold;
    color: #000;
  }
`;
export const StartAbout = () => {
  return (
    <Section id="startabout" className="">
        <div className="container" data-aos="fade-up">
        <SecTitle data-aos="fade-up">
          <HeadH2>About</HeadH2>
          <ParTitle>A little about me</ParTitle>
        </SecTitle>
          <div className="row py-1">
            <div className="col-lg-6 video-box align-self-baseline pt-5" data-aos="fade-right" data-aos-delay="100">
              <Imag src={about3} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-5 content" data-aos="fade-left" data-aos-delay="100">
            <div class = "section-head text-left">
               <br />
                    <h1>Who am I ?</h1><br />
                  </div>
                  <div className = "about-text">
                    <p>I am a self-taught student, passionate about creativity, who has discovered the world 
                      of technology and is not afraid to learn more every day through constant practice, I am 
                      aware of my mistakes, but I am not afraid of making mistakes, because this is the true 
                      path of learning; I deeply believe that everything can be learned if you have the motivation 
                      and courage to do so and I am convinced that technology is the way to transform the world 
                      and make it, every day, a better place for everyone.</p>
                    <p style={{fontWeight: 'bold'}}>Life will put obstacles, I will put the limits....</p>
                   
                    <Link to='/startprofile'>
                     <BtnResume href='/startprofile'>Resume</BtnResume>
                   </Link>
                  </div>
            </div>
          </div>
        </div>
      </Section>
  );
}

