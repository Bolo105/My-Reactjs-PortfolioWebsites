import React from 'react'
import { team } from '../photoCommon/PhotoData';
import styled from 'styled-components';
import { PhotoHeading } from '../photoCommon/PhotoHeading';

const Team = styled.div`
background: #edf2f2;
padding-top: 30px;
padding-bottom: 45px;
`;

const Head3 = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;  
  font-family: 'Poppins', sans-serif;
`;
const Head5 = styled.h5`
  margin-bottom: 25px;
  font-size: 20px; 
  font-family: 'Poppins', sans-serif;
`;
const Imag = styled.img`
  margin-bottom: 45px;
  margin-top: 45px;
  padding-top: 15px;
  border-radius: 50%;
  max-width: 150px;
`;
const Card = styled.div`
  border-radius: 0;
  box-shadow: 5px 5px 15px #afc0c4;
  transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  @media screen and (max-width: 992px) {
      margin-bottom: 20px;
  }
`;
const Parr = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #999 !important;

`;
const Icon = styled.i`
  font-size: 26px;
  color: #555;
`;

export const PhotoTeam = () => {
  return (
    <Team id = "phototeam" className = "team">
       <div className = "container my-3 text-center">
          <PhotoHeading title='Our team' parr='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, modi dolores.'/>
          <div className="row">
            {team.map((val) => ( 
            <div className="col-lg-4 col-md-12">
              <Card className="card">
                <div className="card-body">
                  <Imag className = "img-fluid rounded-circle" src={val.cover} alt="person 1" />
                  <Head3>{val.name}</Head3>
                  <Head5>{val.job}</Head5>
                  <Parr className = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</Parr>
                  <div className="d-flex flex-row justify-content-center">
                   <div className="p-4"><a href="#/"><Icon>{val.icon1}</Icon></a></div>
                   <div className="p-4"><a href="#/"><Icon>{val.icon2}</Icon></a></div>
                   <div className="p-4"><a href="#/"><Icon>{val.icon3}</Icon></a></div>
                  </div>
                </div>
              </Card>
            </div>
            ))}
      </div>
      </div>
   </Team>
  )
}

