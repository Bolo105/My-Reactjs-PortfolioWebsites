import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo4 from '../buildImg/logo4.png'

const Sec = styled.div`   
  .getstarted {
    background-color: white !important;
    margin-left: 30px;
    border-radius: 4px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    padding: .5rem 1rem;
    line-height: 2.3;
  }
  .navbar-nav a {
    text-decoration: none !important;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
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
const Ul = styled.ul`
   @media only screen and (max-width: 991px) {
      margin: 1rem;
      justify-content: flex-center;
      align-items: flex-center;
      text-align: center; 
}
`;
const Imag = styled.img`
    width: 70px;
`;

const Head1 = styled.h5`
    font-weight: bold;
    color: #68a0d2;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 35px;
    vertical-align: middle;
	  letter-spacing: 1px;  
    &:hover {
      color: #96b9d8;
    }
    @media(max-width: 912px){
      font-size: 20px;
    }
`;

export const BuildNav = () => {
  return (
    <div id = 'buildnav'>
       <Sec className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="container">
       <div className="navbar-brand" href="/">
			   <Imag src={logo4} alt="" /><Head1>myBuildComp</Head1>
			 </div>
				 <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
					 <span className="navbar-toggler-icon"></span>
				</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<Ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
					<Link className="nav-item" to="/buildhome">
					    <a className="nav-link" href = "/buildhome">Home</a>
					</Link>
					<Link className="nav-item" to="/buildabout">
						<a className="nav-link" href="/buildabout">About</a>
					</Link>
					<Link className="nav-item" to="/buildservices">
						<a className="nav-link" href="/buildservices">Services</a>
					</Link>
					<Link className="nav-item" to="/buildportfolio">
						<a className="nav-link" href="/buildportfolio">Portfolio</a>
					</Link>
					<Link className="nav-item" to="/buildtest">
						<a className="nav-link" href="/buildtest">Testimonials</a>
					</Link>
					<Link className="nav-item" to="/buildblog">
						<a className="nav-link" href="/buildblog">Blog</a>
					</Link>
					<Link className="nav-item" to="/buildcontact">
						<a className="nav-link" href="/buildcontact">Contact</a>
					</Link>
				</Ul>
			</div>
		</div>
	</Sec>
    </div>
  )
}
