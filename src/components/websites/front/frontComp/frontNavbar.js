import React  from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaRegGem } from 'react-icons/fa';
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 16px;
  top: 0;
  left: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
const But = styled.button`
@media only screen and (max-width: 991px) { 
  body > nav > div > button:hover,
  body > nav > div > button:focus {
      background-color: #7564e5 !important;
      color: #000 !important;
  }
}
`;
const Ul = styled.ul`
@media only screen and (max-width: 991px) {
margin: 1rem;
      justify-content: flex-center;
      align-items: flex-center;
      text-align: center;
}
`;
const A = styled.a`
  padding: 0 20px;
  margin-right: 20px;
  color: black;
  font-weight: 600;
  transition: 0.3s ease;
  &:hover {
    color: #7564e5;
  }
`;
const A1 = styled.a`
  text-decoration: none;
  color: #000;
  border-radius: 4px;
  padding: 7px 25px 8px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
  border: 2px solid #7564e5;
  &:hover {
    background: #7564e5;
    color: #fff;
  }
`;
const Head = styled.h6`
   font-family: 'Kaushan Script', cursive;
   color: #7564e5;
   font-size: 25px;
`;
const Ic = styled.i`
  font-size: 30px !important;
  padding-top: 25px;
`;

export const FrontNavbar = () => {
  return (
    <header id="frontnavbar" >
    <div className="container d-flex align-items-center justify-content-lg-between">
    <Nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
    <div className="container">
    <Head className="fw-bold mb-4"><Ic className="me-3"><FaRegGem /></Ic>frontEnd</Head>
      <But className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: '#fff', backgroundColor: '#7564e5'}}>
        <span><i id = "bar" className="fas fa-bars"><FaBars color="#fff"/></i></span>
      </But>
      <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
        <Ul className="navbar-nav ">
          <Link className="nav-item pt-2" to="/fronthero" style={{textDecoration: 'none' }}><A className="nav-link active" href="/fronthero" style={{color: '#7564e5'}}>Home</A></Link>
          <Link className="nav-item pt-2" to="/frontabout" style={{textDecoration: 'none'}}><A className="nav-link" href="/frontabout">About</A></Link>
          <Link className="nav-item pt-2" to="/frontportfolio" style={{textDecoration: 'none'}}><A className="nav-link" href="/frontportfolio">Portfolio</A></Link>
          <Link className="nav-item pt-2" to="/frontservices" style={{textDecoration: 'none'}}><A className="nav-link" href="/frontservices">Services</A></Link>
          <Link className="nav-item pt-2" to="/frontteam" style={{textDecoration: 'none'}}><A className="nav-link" href="/frontteam">Team</A></Link>
          <Link className="nav-item pt-2" to="/fronttest" style={{textDecoration: 'none'}}><A className="nav-link" href="/fronttestimonials">Testimonials</A></Link>
          <Link className="nav-item pt-2" to="/frontcontact" style={{textDecoration: 'none'}}><A className="nav-link" href="/frontcontact">Contact</A></Link>
          <A1 href="#about" className="get-started-btn" style={{marginLeft: '40px'}}>Get Started</A1>
        </Ul>
      </div>
    </div>
  </Nav>
  </div>
  </header>
  )
}