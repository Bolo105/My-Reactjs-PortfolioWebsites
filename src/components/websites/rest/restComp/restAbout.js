import React from 'react'
import styled from 'styled-components'
import about1 from '../restImg/about1.jpg'

const Main = styled.section`
   background: #fef8f6;
   padding-top: 110px;
   padding-bottom: 90px;
`;
const AbImg = styled.div`
    text-align: center;
    position: relative;
`;
const Head2 = styled.h2`
    font-family: 'Kaushan Script', cursive;
    font-size: 40px;
	font-weight: bold;
    color: #5f5950;
`;
const Head3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
	font-size:20px;
`;
const Spa = styled.span`
  color: #ff5900;
`;
const Img = styled.img`
  border: 10px solid #f1f1f1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 50%;
    -moz-border-radius: 999px;
    border-radius: 50%;
	max-width: 100%;
`;

export const RestAbout = () => {
  return (
    <Main id="restabout" className="about-main">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos='fade-down-right'>
                  <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                      <Head2> About <Spa> Us</Spa> </Head2>
                      <Head3>To have a good time enjoying the pleasure of eating...</Head3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                      <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros. </p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                  </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="zoom-in">
                  <div className="">
                      <AbImg className="about-images">
                          <Img className="about-main" src={about1} alt="" />
                      </AbImg>
                  </div>
              </div>
          </div>
      </div>
    </Main>
  )
}
