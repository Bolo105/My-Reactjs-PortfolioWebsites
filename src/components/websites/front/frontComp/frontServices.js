import React from 'react'
import { services } from '../frontCommon/frontData'; 
import styled from "styled-components";
import { FrontHeading } from '../frontCommon/frontHeading';

const Sec = styled.section`
background: #ebf4fa;
padding-bottom: 50px;
`;
const SingleServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ServiceIcon = styled.i`
  margin-bottom: 30px;
  font-size: 50px;
  color: #7564e5;
`;
const IconBox = styled.div`
  margin-bottom: 30px;
`;

const ServiceParagraph = styled.p`
  color: #969696;
  line-height: 33px;
`;

export const FrontServices = () => {
  return (
    <Sec id="frontservices" className="services-area gray-bg section-padding" >
      <div className="container">
      <FrontHeading title="Services" par="Lorem ipsum dolor sit amet, consectetur adipisicing elit..." />
        <div className="row">
         {services.map((val) => (
          <div className="col-lg-4 col-md-12" data-aos='flip-left'>
            <SingleServices className="single-services text-center">
              <IconBox className='icon-box'>
                 <ServiceIcon>{val.icon}</ServiceIcon>
              </IconBox>
              <h4>{val.head4}</h4>
              <ServiceParagraph>
                {val.desc}
              </ServiceParagraph>
            </SingleServices>
          </div>
           ))}
        </div>
      </div>
    </Sec>
  )
}
