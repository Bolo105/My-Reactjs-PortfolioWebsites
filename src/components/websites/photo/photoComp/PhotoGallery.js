import React from 'react'
import styled from 'styled-components';
import { gallery } from '../photoCommon/PhotoData';
import { PhotoHeading } from '../photoCommon/PhotoHeading';

const Card = styled.div`
  margin-bottom: 40px;
`;
const Imag = styled.img`
    width: 100%;
    height: 260px;
    &:hover {
        border: 5px solid #f7f7f7;
    }
`;

export const PhotoGallery = () => {
  return (
    <div id = "photogallery" className = "color-bg text-center pt-5 pb-5">
      <div className = "container">
        <PhotoHeading title='Gallery' parr='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, modi dolores.'/>
      <div className = "my-gallery">
        <div className = "row mb-2">
          {gallery.map((val) => (
          <div className = "col-lg-4 col-md-6 col-sm-12">
            <Card className = "card">
               <a href="#/" >
                 <Imag className = "card-img-top img-fluid" src={val.cover} alt="img" />
               </a>
            </Card>
          </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

