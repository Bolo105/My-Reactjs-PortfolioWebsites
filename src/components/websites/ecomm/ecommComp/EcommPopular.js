import React from 'react'
import styled from 'styled-components';
import { popular } from '../ecommCommon/EcommData';

const Sec = styled.section`
    padding-top: 90px;
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
const Imag = styled.img`
    width: 50px; 
    height: 110px;
`;

export const EcommPopular = () => {
  return (
    
      <Sec id = "ecommpopular" className = "">
        <div className = "container">
            <div className = "title text-center pt-3 pb-5">
                <Title className = "position-relative d-inline-block ms-4" data-aos="zoom-in" data-aos-duration="1000">Popular</Title>
            </div>
            <div className = "row">
              {popular.map((item) => (
              <div className = "col-md-6 col-lg-4 row g-3" data-aos="fade-left" data-aos-duration="1000">
                <h3 className = "fs-5 pb-2">{item.head}</h3>
                <div className = "d-flex align-items-start justify-content-start py-2">
                   <Imag src={item.imagen1} alt = "" className = "img-fluid pe-3 w-25"  />
                   <div>
                      <p className = "mb-0">{item.par1}</p>
                      <span>{item.span1}</span>
                   </div>
                </div>
                <div className = "d-flex align-items-start justify-content-start py-2">
                   <Imag src={item.imagen2} alt = "" className = "img-fluid pe-3 w-25"  />
                   <div>
                      <p className = "mb-0">{item.par2}</p>
                      <span>{item.span2}</span>
                   </div>
                </div>
                <div className = "d-flex align-items-start justify-content-start py-2">
                   <Imag src={item.imagen3} alt = "" className = "img-fluid pe-3 w-25"  />
                   <div>
                      <p className = "mb-0">{item.par3}</p>
                      <span>{item.span3}</span>
                    </div>
                </div>
              </div>
                ))}
            </div>
        </div>
    </Sec>

  )
}

