import React  from "react";
import logo from '../restImg/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import styled from "styled-components";

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    justify-content: flex-start;
  }
`;
const Nav = styled.nav`
  font-size: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Imag = styled.img`
    width: 80px;
    margin-right: 0px;
    @media(max-width: 1280px){
      width: 60px;
    }
    @media(max-width: 1024px){
      width: 55px;
    }
`;

const But = styled.button`
@media only screen and (max-width: 991px) { 
  body > nav > div > button:hover,
  body > nav > div > button:focus {
      background-color: #fff !important;
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
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease;
  &:hover {
    color: #ff5900;
  }
  @media(max-width: 1280px){
      font-size: 12px;
    }
`;

const Head1 = styled.h5`
    font-weight: bold;
    color: #ff5900;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 35px;
    vertical-align: middle;
	  letter-spacing: 1px;  
    &:hover {
      color: #ff5900;
    }
    @media(max-width: 1280px){
      font-size: 30px;
      float: left;
    }
    @media(max-width: 1024px){
      font-size: 25px;
      float: left;
    }
    @media(max-width: 992px){
      font-size: 30px;
      float: left !important;
      text-align: start; 
    }
`;


export const RestNavbar = () => {
  return (
    <header id="restnavbar" >
    <div className="container d-flex align-items-center justify-content-lg-between">
    <Nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
    <div className="container">    
       <HeaderContent>
          <Imag src={logo} alt=""/><Head1>Harta'o</Head1>
       </HeaderContent>
      <But className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: '#fff', backgroundColor: '#1c5c8c'}}>
        <span><i id = "bar" className="fas fa-bars"><FaBars color="#fff"/></i></span>
      </But>
      <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
        <Ul className="navbar-nav ">
          <Link className="nav-item pt-2" to="/resthome" style={{textDecoration: 'none' }}><A className="nav-link active" href="/resthome" style={{color: '#ff5900'}}>Home</A></Link>
          <Link className="nav-item pt-2" to="/restabout" style={{textDecoration: 'none'}}><A className="nav-link" href="/restabout">About</A></Link>
          <Link className="nav-item pt-2" to="/restwhyus" style={{textDecoration: 'none'}}><A className="nav-link" href="/restwhyus">Why Us</A></Link>
          <Link className="nav-item pt-2" to="/restmenu" style={{textDecoration: 'none'}}><A className="nav-link" href="/resmenu">Menu</A></Link>
          <Link className="nav-item pt-2" to="/restgallery" style={{textDecoration: 'none'}}><A className="nav-link" href="/restgallery">Gallery</A></Link>
          <Link className="nav-item pt-2" to="/resttestimonials" style={{textDecoration: 'none'}}><A className="nav-link" href="resttestimonials">Testimonials</A></Link>
          <Link className="nav-item pt-2" to="/restquestions" style={{textDecoration: 'none'}}><A className="nav-link" href="restquestion">FAQ's</A></Link>
          <Link className="nav-item pt-2" to="/restteam" style={{textDecoration: 'none'}}><A className="nav-link" href="/restteam">Team</A></Link>
          <Link className="nav-item pt-2" to="/restbook" style={{textDecoration: 'none'}}><A className="nav-link" href="restbook">Book</A></Link>
          <Link className="nav-item pt-2" to="/restcontact" style={{textDecoration: 'none'}}><A className="nav-link" href="/restcontact">Contact</A></Link>
        </Ul>
      </div>
    </div>
  </Nav>
  </div>
  </header>
  )
}