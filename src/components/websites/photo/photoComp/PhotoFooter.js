import React from 'react'
import styled from'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Links } from '../photoCommon/PhotoData';

const Foot = styled.footer`
   background-color: #111;
   font-family: 'Poppins', sans-serif;
`;
const Enl = styled.a`
   text-decoration: none !important;
   transition: .3s;
   &:hover {
    color: #56b8e6 !important;
    letter-spacing: 1px;
   }
`;
const Copyt = styled.a`
   text-decoration: none !important;
   font-family: 'Kaushan Script', cursive;
   font-size: 18px;
   color: #00ff8c;
   &:hover {
    color: #fff;
   }
`;
const Copy = styled.div`
  background-color: #000;
  margin-left: -10px;
`;
const Icon = styled.i`
    width: 30px;
    height: 30px;
    padding: 8px 10px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 14px;
    color: #fff;
`;
export const PhotoFooter = () => {
  return (
    
  <Foot id='photofooter' className="text-center text-white">
    <div className="container">
      <section className="">
        <div className="row text-center d-flex justify-content-center pt-5">
          {Links.map((val) => (
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Enl href="#!" className="text-white">{val.linky}</Enl>
            </h6>
          </div>
          ))}
        </div>
      </section>
      <hr className="my-5" />
      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center mb-5">
        <a href="/" className="text-white me-5">
          <Icon style={{backgroundColor: '#3b5998'}}><FaFacebookF /></Icon>
        </a>
        <a href="/" className="text-white me-5">
          <Icon style={{backgroundColor: '#55acee'}}><FaTwitter /></Icon>
        </a>
        <a href="/" className="text-white me-5">
          <Icon style={{backgroundColor: '#ac2bac'}}><FaInstagram /></Icon>
        </a>
        <a href="/" className="text-white me-5">
          <Icon style={{backgroundColor: '#dd4b39'}}><FaGoogle /></Icon>
        </a>
        <a href="/" className="text-white me-5">
          <Icon style={{backgroundColor: '#0082ca'}}><FaLinkedinIn /></Icon>
        </a>
        <a href="/" className="text-white me-5">
          <Icon style={{backgroundColor: '#333'}}><FaGithub/></Icon>
        </a>
      </section>  
    </div>
    <Copy className="text-center p-3" >© 2023 Copyright:
      <Copyt className="" href="/"> myPhoto</Copyt>
    </Copy>
  </Foot>

  )
}
