import React from 'react'
import about1 from '../ecommImg/about1.jpg';
import styled from 'styled-components';

const Sec = styled.section`
    padding-top: 70px;
    padding-bottom: 50px;
`;
const Title = styled.h2`
      font-size: 30px;
      font-weight: bold;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      &:before {
      position: absolute;
      content: "";
      width: 4px;
      height: 50px;
      background-color: #02f7df;
      left: -20px;
      top: 50%;
      -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
              transform: translateY(-50%);
     }
`;
export const EcommAbout = () => {
  return (

       <Sec id = "ecommabout" className = "">
        <div className = "container">
            <div className = "row gy-lg-5 align-items-center">
                <div className = "col-lg-6 order-lg-1 text-center text-lg-start">
                    <div className = "title pt-3 pb-5">
                        <Title className = "position-relative d-inline-block ms-4" data-aos="zoom-in" data-aos-duration="1000">About Us</Title>
                    </div>
                    <p className = "lead text-muted" data-aos="fade-left" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
                </div>
                <div className = "col-lg-6 order-lg-0" data-aos="fade-right" data-aos-duration="1000">
                    <img src = {about1} alt = "" className = "img-fluid" />
                </div>
            </div>
        </div>
    </Sec>

  )
}

