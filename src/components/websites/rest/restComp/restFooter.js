import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import styled from 'styled-components'

const Foot = styled.footer`
  background: #35322d;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
`;
const Head3 = styled.h3`
  font-family: 'Kaushan Script', cursive;
  font-size: 40px;
  font-weight: 700;
  color: #ff5900;
  position: relative;
  padding: 0;
  margin: 0 0 15px 0;
`;
const Par = styled.p`
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
`;
const Soc = styled.div`
  margin: 0 0 40px 0;
`;
const A = styled.a`
  font-size: 18px;
  display: inline-block;
  background: #46423b;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  &:hover {
    background: #ff5900;
    color: #fff;
  }
`;
const Copy = styled.div`
  margin: 0 0 5px 0;
`;
const Spa = styled.span`
  font-family: 'Kaushan Script', cursive;
  font-size: 18px;
  color: #ff5900;
`;

export const RestFooter = () => {
  return (
    <Foot id="restfooter">
    <div className="container">
      <Head3>Harta'o</Head3>
      <Par>The opportunity to have a good time enjoying the pleasure of eating...</Par>
      <Soc className="social-links">
        <A href="#/" className="twitter"><i className="bx bxl-facebook"><FaFacebookF /></i></A>
        <A href="#/" className="facebook"><i className="bx bxl-instagram"><FaInstagram /></i></A>
        <A href="#/" className="instagram"><i className="bx bxl-twitter"><FaTwitter /></i></A>
        <A href="#/" className="google-plus"><i className="bx bxl-linkedin"><FaLinkedinIn /></i></A>
        <A href="#/" className="linkedin"><i className="bx bxl-skype"><FaSkype /></i></A>
      </Soc>
      <Copy className="copyright">
        &copy; Copyright <strong><Spa>Harta'o</Spa></strong>. All Rights Reserved
      </Copy>
    </div>
  </Foot>
  )
}