import React from "react";
import styled from "styled-components";
import librohead from '../booksImage/librohead.png'
import bghome from '../booksImage/bghome.jpg'

const Main = styled.section`
  position: relative;
  background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bghome});
  background-attachment: fixed;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 200px 0px 200px;
 
`;
const Head1 = styled.h1`
  color: #4AC4F3;
  @media(max-width: 1024px){
      font-size: 35px;
    }
`;
const Par = styled.p`
   @media(max-width: 1024px){
      font-size: 14px;
    }
`;
const Btn = styled.a`
  background-color: #4AC4F3;
  border-color: #4AC4F3;
  border-radius: 0px;
  color: #fff;
  font-weight: bold;
  padding: 15px 35px;
  &:hover {
    background-color: #18b5f3;
    border-color: #18b5f3;
  }
  @media(max-width: 1024px){
      padding: 13px 30px;
    }
`;
const HeadImg = styled.div`
    position: relative;
    overflow: hidden;
    text-align: right;
`;
const Imag = styled.img`
    width: 900px;
    height: 500px;
`;


export const BooksHome = () => {
  return (
    <Main id="fronthero">
      <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-7 align-self-center text-center text-lg-start mb-lg-5">
                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">Google API Books</div>
                    <Head1 className="display-4 mb-4 animated slideInRight fw-bold">Explore our Google API  <br />and find what you want...</Head1>
                    <Par className="text-white mb-4 animated slideInRight">Tempor rebum no at dolore lorem clita rebum rebum ipsum
                        rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit</Par>
                    <Btn href="/" className="btn btn-light  me-3 animated slideInRight">Read More</Btn>
                </div>
          <div className="col-lg-5 col-md-12 pt-5">
            <HeadImg className="header-img">
              <Imag src={librohead} alt="Product" className="img-fluid"/>
            </HeadImg>
          </div>
        </div>
      </div>
    </Main>
  )
}
