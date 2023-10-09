import React from 'react'
import { services } from '../photoCommon/PhotoData';
import styled from 'styled-components';
import serv from '../photoImg/serv.jpg';
import { PhotoHeading } from '../photoCommon/PhotoHeading';

const Serv = styled.div`
  background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${serv});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff !important;
  padding-bottom: 90px;
  padding-top: 90px;
  background-attachment: fixed;
  display: flex;
  margin-bottom: -15px;
`;
const Par = styled.p`
 font-size: 20px;
 font-weight: 700;
 color: #ccc;
`;
const Icon = styled.div`
  font-size: 40px;
  margin: 20px auto;
  padding: 8px;
  height: 80px;
  width: 80px;
  border: 1px solid white;
  border-radius: 50%;
`;
const Col4 = styled.div`
  &:hover {
      box-shadow: 5px 7px 9px -3px rgba(255, 255, 255, 0.5);
      cursor: pointer;
    }
`;

export const PhotoServices = () => {
  return (
    <Serv id = "photoservices" className = "services">
      <div className="container">
        <PhotoHeading title='Our Services' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, modi dolores.'/>
        <div className='row'>
        {services.map((val) => (
            <Col4 className="col-lg-4 col-md-12 text-center">
               <Icon className="icon">
                 <i>{val.icon1}</i>
               </Icon>
               <h3>{val.serv}</h3>
               <Par className = "p-text">{val.text}</Par>
            </Col4>
            ))}
        </div>
      </div>
    </Serv>
  )
}
