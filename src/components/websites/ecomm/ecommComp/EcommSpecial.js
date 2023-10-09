import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { special } from '../ecommCommon/EcommData';
import styled from 'styled-components';

const Sec = styled.section`
    padding-top: 70px;
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
const Span = styled.span`
    top: 20px;
    right: 20px;
    color: #02f7df;
`;
const Btn = styled.a`
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    color: rgb(85, 85, 85);
    padding: 8px 20px !important;
    border-radius: 25px;
    border: 1px solid rgb(85, 85, 85);
    text-decoration: none;
    &:hover {
        background-color: #02f7df;
        color: #000;
        border-color: #02f7df;
        font-weight: 700;
    }
`;
const Imag = styled.img`
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    height: 395px;
    &:hover {
      -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
            transform: scale(1.2);
    }
`;

export const EcommSpecial = () => {
  return (
    <Sec id = "ecommspecial" className = "pb-5">
    <div className = "container">
        <div className = "title text-center py-5">
            <Title className = "position-relative d-inline-block" data-aos="zoom-in" data-aos-duration="1000">Special</Title>
        </div>
        <div className = "special-list row g-0">
            {special.map((item) => (
            <div className = "col-12 col-md-6 col-lg-3 p-2" data-aos="zoom-in" data-aos-duration="1000">
               <div className = "special-img position-relative overflow-hidden">
                  <Imag src={item.cover} className = "w-100" alt="" />
                  <Span className = "position-absolute d-flex align-items-center justify-content-center fs-4">
                     <FaHeart />
                  </Span>
                </div>
                <div className = "text-left list">
                   <p className = "text-capitalize mt-3 mb-1">{item.title}</p>
                   <span className = "fw-bold d-block">{item.price}</span>
                   <Btn href = "/" className = "btn mt-3">Add to Cart</Btn>
                </div>
            </div>
            ))}
        </div>
    </div>
</Sec>
  )
}

