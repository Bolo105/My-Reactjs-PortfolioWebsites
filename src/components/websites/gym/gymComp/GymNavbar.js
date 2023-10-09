import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import gymlogo from '../gymImg/gymlogo.jpg'

const Sec = styled.div`   
  .navbar-nav a {
    font-family: poppins;
    text-decoration: none !important;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .navbar-light .navbar-brand {
    color: #000;
    font-size: 45px !important;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }
  
  
  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #000;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #000;
  }
  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: #000;
  }
  .w-100 {
    height: 100vh;
  }
  .navbar-toggler {
    padding: 1px 5px;
    font-size: 18px;
    line-height: 0.3;
    background: #fff;
  }
`;
const Imag = styled.img`
    width: 70px;
`;

const Head1 = styled.h5`
    font-family: "Oswald", sans-serif !important;
    font-weight: bold;
    color: #18d26e;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 35px;
    vertical-align: middle;
	  letter-spacing: 1px;  
    &:hover {
      color: #18d26e;
    }
    @media(max-width: 912px){
      font-size: 20px;
    }
`;
const CenteredLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const GymNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
	  setIsMenuOpen(!isMenuOpen);
	};
  return (
    <div>
  <Sec className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="container">
       <div className="navbar-brand" href="/">
			   <Imag src={gymlogo} alt="" /><Head1>Muscle <span style={{color: '#000'}}>&</span> Now</Head1>
			 </div>
				 <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button" onClick={toggleMenu}>
					 <span className="navbar-toggler-icon"></span>
				</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<CenteredLinks className="navbar-nav ms-auto mb-2 mb-lg-0" isOpen={isMenuOpen}> 
					<Link className="nav-item" to="/gymhome">
					    <a className="nav-link" href = "/gymhome">Home</a>
					</Link>
					<Link className="nav-item" to="/gymwhyus">
						<a className="nav-link" href="/gymwhyus">Why Us?</a>
					</Link>
					<Link className="nav-item" to="/gymoffers">
						<a className="nav-link" href="/gymoffers">Offers</a>
					</Link>
					<Link className="nav-item" to="/gymenviroment">
						<a className="nav-link" href="/gymenviroment">Gallery</a>
					</Link>
					<Link className="nav-item" to="/gymplan">
						<a className="nav-link" href="/gymplan">Plan</a>
					</Link>
					<Link className="nav-item" to="/gymteam">
						<a className="nav-link" href="/gymteam">Team</a>
					</Link>
					<Link className="nav-item" to="/gymcontact">
						<a className="nav-link" href="/gymcontact">Contact</a>
					</Link>
				</CenteredLinks>
			</div>
		</div>
	</Sec>
    </div>
  )
}