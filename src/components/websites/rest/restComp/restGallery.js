import React, { useEffect } from 'react'
import 'baguettebox.js/dist/baguetteBox.min.css';
import baguetteBox from 'baguettebox.js';
import { gallery } from '../restCommon/restData';
import styled from 'styled-components'
import { RestHeading } from '../restCommon/restHeading';

const Wrp = styled.div`
    background: #fff;
    min-height: 100vh;
    font: normal 16px sans-serif;
    padding: 70px 0;
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

export const RestGallery = () => {
  useEffect(() => {
    baguetteBox.run('.tz-gallery');
  }, []);
  return (
<Wrp id='restgallery' lassName='wrapp'>
 <div className="container gallery-container">
 <RestHeading  title='The Place where ' spa='We Work' parr='A good place to have a good time ...' />
   <Tz className="tz-gallery">
      <div className="row">
      {gallery.map((val) => (
        <div className="col-lg-4 col-sm-6 col-md-6">
            <a className="lightbox" href={val.cover1}>
                <Img src={val.cover2} alt="clear" />
            </a>
        </div>
      ))}
      </div>
   </Tz>
 </div>
</Wrp>   
  )
}
