import React from 'react'
import { GymHeading } from '../gymCommon/GymHeading'
import { offers1 } from '../gymCommon/GymData'
import { offers2 } from '../gymCommon/GymData'
import styled from 'styled-components'

const Sec = styled.section`
    background: #fff;
	padding-bottom: 80px;
    padding-top: 100px;
`;
const Text = styled.div`
    background: #030f27;
	position: relative;
	padding: 25px 15px;
	text-align: center;
	z-index: 1;
    &:hover .span {
        color: #f71119;
	    font-weight: bold;
    }
`;
const Item = styled.div`
    overflow: hidden;
	margin-bottom: 30px;
    &:hover ${Text}{
        background: #18d26e;
    }
`;
const Imag = styled.img`
    width: 100%;
`;

const Spa = styled.div`
    font-family: 'Poppins', sans-serif;
	color: #f71119;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 700;
	transition: .5s;
`;
const Head5 = styled.h5`
    font-family: 'Poppins', sans-serif;
	font-size: 20px;
	color: #ffffff;
	font-weight: 600;
	text-transform: uppercase;
	margin-top: 4px;
`;
const Head4 = styled.h5`
    font-family: 'Poppins', sans-serif;
	font-size: 26px;
	color: #ffffff;
	font-weight: 600;
	text-transform: uppercase;
	margin-top: 4px;
`;

export const GymOffers = () => {
  return (
  <Sec id="gymoffers" className="classes-section spad" >
    <div className="container">
         <GymHeading title='HOW DO WE HAVE FUN?' parr='WHAT WE CAN OFFER'/>
         <div className="row">
          {offers1.map((val) => (
            <div className="col-lg-4 col-md-4">
                <Item className="class-item">
                    <div className="ci-pic">
                        <Imag src={val.cover} Class = "img-fluid" alt=""b/>
                    </div>
                    <Text className="ci-text">
                        <Spa className='span'>{val.exe}</Spa>
                        <Head5>{val.type}</Head5>
                    </Text>
                </Item>
            </div>
            ))}
          </div>
          <div className='row'>
            {offers2.map((val) => (
            <div className="col-lg-6 col-md-6">
                <Item className="className-item">
                    <div className="ci-pic">
                        <img src={val.cover} Class = "img-fluid" alt="" />
                    </div>
                    <Text className="ci-text">
                        <Spa className='span'>{val.exe}</Spa>
                        <Head4>{val.type}</Head4>
                    </Text>
                </Item>
            </div>
            ))}
          </div> 
    </div>
</Sec>
  )
}
