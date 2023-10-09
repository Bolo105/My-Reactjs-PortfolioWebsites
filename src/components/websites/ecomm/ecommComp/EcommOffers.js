import React from 'react'
import styled from 'styled-components';
import offer1 from '../ecommImg/offer1.jpg';

const Offers = styled.section`
   background: url(${offer1}) center/cover no-repeat;
`;
const Row = styled.div`
   min-height: 60vh;
`;
const Span = styled.span`
    font-size: 28px;
    color: #02f7df !important;
`;
const Title = styled.h2`
    font-size: 60px;
    font-family: 'Kaushan Script', cursive;
    color: #02f7df !important;
`;
const Btn = styled.a`
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: rgb(85, 85, 85);
    padding: 10px 28px;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
        background-color: #02f7df;
        color: #000;
        border-color: #02f7df !important;
        font-weight: 700;
    }
`;

export const EcommOffers = () => {
  return (
    <div>
       <Offers id = "ecommoffers" className = "py-5">
        <div className = "container">
            <Row className = "row d-flex align-items-center justify-content-center text-right justify-content-lg-end text-lg-end">
                <div className = "offers-content">
                    <Span className = "text-white" data-aos="fade-left" data-aos-duration="1000">Discount Up To 40%</Span>
                    <Title className = "mt-2 mb-4 text-white" data-aos="fade-left" data-aos-duration="2000">Grand Sale Offer!</Title>
                    <Btn href = "/" className = "btn" data-aos="zoom-in" data-aos-duration="1000">Buy Now</Btn>
                </div>
            </Row>
        </div>
    </Offers>
    </div>
  )
}

