import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import ecomm2 from '../startImg/ecomm2.jpg';
import rest1 from '../startImg/rest1.jpg';
import gym1 from '../startImg/gym1.jpg';
import webMaker from '../startImg/webMaker.jpg';
import home2 from '../startImg/home2.jpg'
import bghome from '../startImg/bghome.jpg';

const Port = styled.div`
   padding-top: 100px;
   padding-bottom: 30px;
`;
const Card = styled.div`
   margin: 15px auto;
   overflow: hidden;
   &:hover{
    -webkit-box-shadow: 7px 8px 6px 0px #000000; 
    box-shadow: 7px 8px 6px 0px #000000;
    cursor: pointer;
   }
   &:hover img {
    transform: scale(1.5);
   }
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
   padding: 30px 30px;
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
    height: 250px;
    width: 530px;
    object-fit: cover;
    cursor: pointer;
    transition: all 1.5s ease;
`;

export const StartGallery = () => {
  return (
    <Port id='startgallery' className='bg-light'>
         <div className = "container">
         <SecTitle data-aos="fade-up">
            <HeadH2>Portfolio</HeadH2>
            <ParTitle>React/WebSites</ParTitle>
         </SecTitle>
          <div className = "row">

             <div className = "col-sm-12 col-md-6 col-lg-4" data-aos="fade-right"> 
                <Card className = "card">
                  <Link to='/react/websites/ecommweb'>
                    <a href='/react/websites/ecommweb' target="_blank">
                      <Imag src={ecomm2} className = "img-fluid" alt=""/>
                    </a>
                  </Link>
                </Card>
                <div className = "card-body">
                    <h4 className = "text-center">E-commerce</h4>
                </div>
             </div>

             <div className = "col-sm-12 col-md-6 col-lg-4" data-aos="fade-up"> 
               <Card className = "card">
                  <Link to='/react/websites/restweb'>
                   <a href="/react/websites/restweb" target="_blank">
                     <Imag src={rest1} className = "img-fluid" alt=""/>
                   </a>
                  </Link>
               </Card>
               <div className = "card-body">
                   <h4 className = "text-center">Restaurant</h4>
               </div>
             </div>

             <div className = "col-sm-12 col-md-6 col-lg-4" data-aos="fade-left"> 
               <Card className = "card">
                  <Link to='/react/websites/gymweb'>
                   <a href="/react/websites/gymweb" target="_blank">
                     <Imag src={gym1} className = "img-fluid" alt=""/>
                     </a>
                  </Link>
               </Card>
               <div className = "card-body">
                  <h4 className = "text-center">Gym</h4>
               </div>
             </div>
          

 

           <div className = "col-sm-12 col-md-6 col-lg-4" data-aos="fade-right"> 
             <Card className = "card">
               <Link to='/react/websites/buildweb'>
                 <a href="/react/websites/buildweb" target="_blank">
                   <Imag src={home2} className = "img-fluid" alt=""/>
                 </a>
               </Link>
             </Card>
             <div className = "card-body">
                 <h4 className = "text-center">Build Company</h4>
             </div>
           </div>

           <div className = "col-sm-12 col-md-6 col-lg-4" data-aos="fade-up"> 
            <Card className = "card">
              <Link to='/react/websites/frontweb'>
                <a href="/react/websites/frontweb" target="_blank">
                  <Imag src={webMaker} className = "img-fluid" alt=""/>
                </a>
              </Link>
            </Card>
            <div className = "card-body">
                <h4 className = "text-center">Front End</h4>
            </div>
           </div>

           <div className = "col-sm-12 col-md-6 col-lg-4" data-aos="fade-left"> 
            <Card className = "card">
              <Link to='/react/websites/booksweb'>
                <a href="/react/websites/booksweb" target="_blank">
                  <Imag src={bghome} className = "img-fluid" alt=""/>
                </a>
              </Link>
            </Card>
            <div className = "card-body">
                <h4 className = "text-center">Books API</h4>
            </div>
           </div>
           </div>
           
         </div>
       </Port>
  )
}

