import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Light = styled.nav`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
	z-index: 1;
`;
const LinkNav = styled.a`
    font-size: 18px;
    text-transform: capitalize;
	text-decoration: none !important;
    font-weight: 500;
	margin-left: 35px;
	color: #000;
	cursor: pointer;
	&:hover {
		color: #56b8e6;
	}
`;

const TogglerIcon = styled.span`
    padding: 1px 5px;
	font-size: 18px;
	line-height: 0.3;
`;
const Head1 = styled.h5`
    font-weight: bold;
    color: #56b8e6;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 35px;
    vertical-align: middle;
	letter-spacing: 1px;  
    &:hover {
      color: #56b8e6;
    }
`;

export const PhotoNavbar = () => {
  return (
    <Light className="navbar navbar-expand-lg navbar-light  bg-light fixed-top">
		<div className="container">
			<div className="navbar-brand" href="/">
			   <Head1>myPhoto</Head1>
			</div>
				 <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
					 <TogglerIcon className="navbar-toggler-icon"></TogglerIcon>
				</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<Link className="nav-item" to='/photohero' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/photohero">Home</LinkNav>
					</Link>
					<Link className="nav-item" to='/photogallery' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/photogallery">Gallery</LinkNav>
					</Link>
					<Link className="nav-item" to='/photoservices' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/photoservices">Services</LinkNav>
					</Link>
					<Link className="nav-item" to='/phototeam' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/phototeam">Team</LinkNav>
					</Link>
					<Link className="nav-item" to='/photocontact' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/photocontact">Contact</LinkNav>
					</Link>
				</ul>
			</div>
		</div>
	</Light>
  )
}
