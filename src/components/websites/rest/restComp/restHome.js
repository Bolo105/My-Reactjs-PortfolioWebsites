import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img6 from '../restImg/img6.jpg'

const Main = styled.section`
  position: relative;
  background-image: url(${img6});
  background-attachment: fixed;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 400px 0px 200px;
`;
const Head2 = styled.h2`
  color: #dcdde1;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  font-family: 'Kaushan Script', cursive;
  font-size: 70px;
  font-weight: bold;
`;
const Spa = styled.span`
  color: #ff5900;
`;
const Par = styled.p`
  margin-top: 1em;
  padding: 0;
  font-size: 1em;
  color: #dcdde1;
`;
const Btn = styled.a`
  background: #ff5900;
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 700;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 15px;
  &:hover {
    background-color: #ffa575;
  font-weight: bold;
  }
  @media screen and (max-width: 768px){
    margin-bottom: 15px;
}
`;

export const RestHome = () => {
  return (
    <Main id='resthome' className = "main">
      <div className = "container">
          <div className = "row">
             <div className = "col-sm-6">
               <Head2 className = "animated slideInDown" >Welcome to <Spa>Harta'o</Spa></Head2>
               <Par className = "animated fadeInUp" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Minima harum, ad sequi ipsum voluptate iure in sunt corporis voluptates nemo velit. Error, itaque voluptatum.
                Quo temporibus molestiae veniam nisi quisquam....</Par>
                <Btn className = "btn animated zoomIn"  href="#menu">Our Menu</Btn>
                <Link  to='/restbook'>
                   <Btn className = "btn animated zoomIn"  href="/restbook">Book a Table</Btn>
                </Link>
             </div>
          </div>
      </div>
    </Main>
  )
}
