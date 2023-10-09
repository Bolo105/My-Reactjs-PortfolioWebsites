import React from 'react'
import { BsRocketTakeoff } from 'react-icons/bs';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const Parr = styled.p`
  color: #ccc;
  line-height: 1.7;
  font-size: 18px;
`;
const FooterTop = styled.div`
   background: #111;
   padding: 50px 0;
`;
const FooterBot = styled.div`
   background: #000;
   padding-top: 30px;
   padding-bottom: 15px;
`;
const Heads = styled.h2`
   font-size: 18px;
   font-weight: 800;
   font-family: 'Poppins';
   color: #00ff8c;
   margin: 10px 0;
   letter-spacing: 3px;
   text-transform: uppercase;
`;

const Head1 = styled.h5`
    font-weight: 700;
    color: #00ff8c;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    &:hover {
      color: #42e73c;
    }
`;
const Lista = styled.li`
   border-bottom: 1px solid rgba(255, 255, 255, 0.3);
   line-height: 40px;
`;
const Enlace = styled.a`
   font-size: 18px;
   color: #ccc;
   text-decoration: none;
   &:hover{
    color: #00ff8c;
   }
`;

const Social = styled.div`
   text-align: center;
`;
const LinkSoc = styled.a`
   background: #00ff8c;
   color: #000;
   width: 40px;
   height: 40px;
   display: inline-block;
   border-radius: 50%;
   margin-right: 0;
   margin-left: 15px;
   padding: 6px 12px;
   &:hover {
    background: #42e73c;
    color: #000;
   }
`;
const EnlCop = styled.a`
   font-size: 18px;
   color: #00ff8c;
   text-decoration: none;
   font-family: 'Kaushan Script', cursive;
   &:hover{
    font-weight: bold;
    color: #42e73c;
   }
`;
const ParC = styled.p`
   text-align: center;
   padding-top: 12px;
   padding-bottom: 12px;
   color: #ccc;
   font-size: 13px;
   margin-bottom: 0;
`;
const News = styled.div`
  [type="email"] {
      border: 0;
      padding: 6px 8px;
      width: 65%;
    }
  [type="submit"] {
    background: #18d26e;
    border: 0;
    width: 35%;
    padding: 6px 0;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #18d26e;
      color: #111;
      font-weight: 700;
    }
  }
`;

export const StartFooter = () => {
  return (
    <div>
        <footer>
      <FooterTop>
       <div className = "container">
          <div className = "row">
              <div className = "col-md-6 line-one">
                 <i><BsRocketTakeoff color='#00ff8c' fontSize='30px' /></i><Head1>makeItHappen!!!</Head1>
                 <Parr className = "text-justify">The mission of this website and its creator is the design and 
                   development of <br /> websites for commercial purposes, using Html, Css, Bootstrap and javascript 
                   technologies in its creation, with a focus on constant and endless learning <br /> through experience </Parr>
              </div>
              <div className = "col-sm-6 col-md-3 line-two">
                 <Heads>Usefulls Links</Heads>
                 <ul className = "footer-links list-unstyled">
                    <Lista><Enlace href = "#header">Home</Enlace></Lista>
                    <Lista><Enlace href = "#header">About</Enlace></Lista>
                    <Lista><Enlace href = "#header">Portfolio</Enlace></Lista>
                    <Lista><Enlace href = "#header">Services</Enlace></Lista>
                    <Lista><Enlace href = "#header">Contact</Enlace></Lista>
                 </ul>
              </div>
              <News className="col-lg-3 col-md-6 footer-newsletter">
                <Heads>Contact</Heads>
                <p style={{color: '#ccc', fontSize: '18px'}}>Send me a message, keep in touch... </p>
                <form action="" method="post">
                  <input type="email" name="email" placeholder='email...'/><input type="submit" value="Submit" />
                </form>
              </News>
          </div>
        </div>
      </FooterTop>
        <FooterBot>
          <div className = "container">
             <div className = "row">
                <Social className = "col">
                  <ul className = "social-icons list-unstyled">
                   <LinkSoc href = "/"><FaFacebook size={'20px'} /></LinkSoc>
                   <LinkSoc href = "/"><FaTwitter size={'20px'}/></LinkSoc>
                   <LinkSoc href = "/"><FaInstagram size={'20px'}/></LinkSoc>
                   <LinkSoc href = "/"><FaLinkedinIn size={'20px'}/></LinkSoc>
                  </ul>
                </Social>
             </div>
             <div className = "col">
                  <ParC className = "copyright-text">Copyright &copy; 2023 All Rights Reserved by<EnlCop href = "/">&nbsp; makeItHappen!!!</EnlCop></ParC>
             </div>
          </div>
        </FooterBot>
      </footer>
    </div>
  )
}

