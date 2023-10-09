import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { BsRocketTakeoff } from 'react-icons/bs';
import styled from 'styled-components'

const Brand = styled.a`
    color: #00ff8c;
	margin-left: 0px;
	font-size: 32px;
	text-transform: none;
	font-weight: 900;
	letter-spacing: 2px;
    font-family: 'Kaushan Script', cursive;
	&:hover {
		color: #00ff8c;
	}
	@media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;
const A = styled.a`
    text-decoration: none;
    font-size: 18px;
	text-transform: capitalize;
	font-weight: 500;
	color: #000;
    padding-left: 30px;
	margin-left: 30px;
`;
const Span = styled.span`
    color: #010101;
    font-family: 'Kaushan Script', cursive;
`;
const But = styled.button`
    padding: 1px 5px;
	font-size: 18px;
	line-height: 0.3;
	background: #fff;
	margin-left: -20px;
`;
const CenteredLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 50px;
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

export const StartNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
	  setIsMenuOpen(!isMenuOpen);
	};
  return (
	<div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
		<div className="container">
		<Brand className="navbar-brand" href="#/"><i><BsRocketTakeoff/></i><Span>makeIt</Span>Happen!!!</Brand> 
			<But 
		    	aria-controls="navbarSupportedContent" 
			    aria-expanded="false" 
				aria-label="Toggle navigation" 
				className="navbar-toggler" 
				onClick={toggleMenu}
				data-bs-target="#navbarSupportedContent" 
				data-bs-toggle="collapse" type="button">
					<span className="navbar-toggler-icon"></span>
			</But>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<CenteredLinks className="navbar-nav ms-auto mb-2 mb-lg-0" isOpen={isMenuOpen}>
					<Link to='/' className="nav-item" style={{textDecoration: 'none'}}>
						<A className="nav-link" href="/">Home</A>
					</Link>
					<Link to='/startabout' className="nav-item" style={{textDecoration: 'none'}}>
						<A className="nav-link" href="/startabout">About</A>
					</Link>
					<Link to='/startgallery' className="nav-item" style={{textDecoration: 'none'}}>
						<A className="nav-link" href="/startgallery">Portfolio</A>
					</Link>
					<Link to='/startservices' className="nav-item" style={{textDecoration: 'none'}}>
						<A className="nav-link" href="/startservices">Services</A>
					</Link>
					<Link to='/startcontact' className="nav-item" style={{textDecoration: 'none'}}>
						<A className="nav-link" href="/startcontact">Contact</A>
					</Link>
				</CenteredLinks>
			</div>
		</div>
	</nav>
	</div>
  )
}

