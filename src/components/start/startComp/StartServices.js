import React from 'react'
import { FaCode, FaCamera } from 'react-icons/fa';
import { BsPencilSquare  } from 'react-icons/bs';
import land from '../startImg/land.jpg';
import styled from 'styled-components';


const Services = styled.div`
   background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${land});
   background-size: cover;
   width: 100%;
   background-position: center center;
   background-attachment: fixed;
   color: #fff !important;
   padding: 90px  60px;
   margin: 0px;
   position: relative;
`;
const HeadH2 = styled.h2`
   font-size: 14px;
   font-weight: 500;
   padding: 0 !important;
   line-height: 1px;
   margin: 0 0 5px 0;
   letter-spacing: 2px;
   color: #fff;
   font-family: "Poppins", sans-serif;
   &:after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #fff;
    margin: 4px 10px;
   }
`;
const SecTitle = styled.div`
   padding-top: 30px;
   padding-bottom: 5px;
   padding-left: -10px;
   text-align: left;
   @media screen and (max-width: 579px) {
      padding-left: -20px;
  }
   
`;
const ParTitle = styled.p`
   margin: 0;
   padding: 0;
   font-size: 30px;
   font-weight: bold !important;
   text-transform: uppercase;
   font-family: "Poppins", sans-serif;
   color: #fff;
`;
const Icon = styled.div`
    font-size: 40px;
    margin: 20px auto;
    height: 80px;
    width: 80px;
    border: 1px solid white;
    border-radius: 50%;
    padding: 6px 14px;
`;
const Serv = styled.div`
    padding-bottom: 15px;
    &:hover {
      box-shadow: 5px 7px 9px -3px rgba(255, 255, 255, 0.5);
      cursor: pointer;
    }
`;
export const StartServices = () => {
  return (
    
      <Services id='startservices'>
        <div className = "container">
          <SecTitle data-aos="fade-up">
            <HeadH2>Services</HeadH2>
            <ParTitle>What Job I do</ParTitle>
          </SecTitle>
          <div className = "row mt-5">
             <div class="col-lg-4 col-md-12 col-12 text-center mt-4 pt-2">
                <Serv>
                  <Icon>
                     <BsPencilSquare />
                  </Icon>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.</p>
                </Serv>
             </div>
             <div class="col-lg-4 col-md-12 col-12 text-center mt-4 pt-2">
                <Serv>
                  <Icon>
                     <FaCode />
                  </Icon>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.</p>
                </Serv>
             </div>
             <div class="col-lg-4 col-md-12 col-12 text-center mt-4 pt-2">
                <Serv>
                  <Icon>
                     <FaCamera />
                  </Icon>
                <h3>Photographer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.</p>
                </Serv> 
             </div>
          </div>
        </div>
    </Services>
    
  )
}

