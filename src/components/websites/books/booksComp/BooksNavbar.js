import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import libro from '../booksImage/libro.png'
import styled from 'styled-components';

const Head1 = styled.h1`
   color:  #4AC4F3;
   font-size: 30px;
`;
const NavbarContainer = styled.nav`
  padding: 20px 0;
  transition: top 0.3s ease-in-out;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: ${({ scrolled }) => (scrolled ? '0' : '-150px')};
  
  ${({ scrolled }) =>
    scrolled }

  @media (max-width: 992px) {
    padding: 10px 0;
    text-align: center;

    ${Head1} {
      font-size: 20px;
    }
  }
`;

const NavbarLogo = styled.img`
  max-height: 40px;
  margin-right: 30px;
`;

const NavbarLink = styled(NavLink)`
  color: #333;
  transition: color 0.3s;
  margin-left: 30px;
  &:hover {
    color: #4AC4F3;
  }
`;

export const BooksNavbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isScrolled, setIsScrolled] = React.useState(false);
  return (
    <NavbarContainer scrolled={isScrolled} className= 'navbar navbar-expand-lg navbar-light bg-light sticky-top' >
      <div className="container">
        <a href="/" className="navbar-brand d-flex justify-content-between align-items-center">
          <NavbarLogo src={libro} alt="Logo" className="navbar-logo" style={{width: '40px'}}/>
          <Head1 className="navbar-title">Books.com</Head1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavbarLink to="/bookshome" className="nav-link active" style={{fontWeight: '700', color: ' #4AC4F3'}}>
                Home
              </NavbarLink>
            </li>
            <li className="nav-item">
              <NavbarLink to="/bookspopular" className="nav-link" style={{fontWeight: '700'}}>
                Popular
              </NavbarLink>
            </li>
            <li className="nav-item">
              <NavbarLink to="/booksauthors" className="nav-link" style={{fontWeight: '700'}}>
                Author
              </NavbarLink>
            </li>
            <li className="nav-item">
              <NavbarLink to="/bookstemathics" className="nav-link" style={{fontWeight: '700'}}>
                Thematic
              </NavbarLink>
            </li>      
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
};


