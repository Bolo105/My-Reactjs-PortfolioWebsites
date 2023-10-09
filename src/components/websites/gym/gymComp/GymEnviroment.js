import React, { useEffect } from 'react'
import 'baguettebox.js/dist/baguetteBox.min.css';
import baguetteBox from 'baguettebox.js';
import { enviroment } from '../gymCommon/GymData';
import styled from 'styled-components'
import { GymHeading } from '../gymCommon/GymHeading';

const Wrp = styled.div`
    background: #ebfff4;
    min-height: 100vh;
    font: normal 16px sans-serif;
    padding: 100px 0;
`;

const Tz = styled.div`
    padding: 40px;
`;
const Img = styled.img`
    border-radius: 4px;
    width: 100%;
    margin-bottom: 30px;
    transition: 0.2s ease-in-out;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    }
`;

export const GymEnviroment = () => {
  useEffect(() => {
    baguetteBox.run('.tz-gallery');
  }, []);
  return (
<Wrp id='gymenviroment' className='wrapp'>
 <div className="container gallery-container">
   <GymHeading title='OUR ENVIRONMENT' parr='SOME PICTURES OF OUR ENVIRONMENT'/>
   <Tz className="tz-gallery">
      <div className="row">
      {enviroment.map((val) => (
        <div className="col-sm-6 col-md-6 col-lg-4">
            <a className="lightbox" href={val.cover1}>
                <Img src={val.cover2} alt="Park" />
            </a>
        </div>
      ))}
      </div>
   </Tz>
 </div>
</Wrp>   
  )
}
