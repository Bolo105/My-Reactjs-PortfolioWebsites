import React from 'react'
import { why } from '../gymCommon/GymData';
import styled from 'styled-components'
import { GymHeading } from '../gymCommon/GymHeading';

const Sec = styled.section`
  background: #ebfff4;
  padding-top: 100px;
	padding-bottom: 70px;
`;
const Item = styled.div`
  text-align: center;
	margin-bottom: 30px;
  &:hover .spa {
    background: #18d26e;
    color: #ffffff;
  }
`;
const Span = styled.span`
  height: 90px;
	width: 90px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	display: inline-block;
	color: #18d26e;
	line-height: 90px;
	text-align: center;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
`;

const Head4 = styled.h4`
  color: #000;
	font-size: 22px;
	font-weight: 600;
	margin-top: 24px;
	margin-bottom: 16px;
`;

export const GymWhyUs = () => {
  return (
       <Sec id="gymwhyus" className="choseus-section spad" >
          <div className="container">
            <GymHeading title='WHY WORK WITH US?' parr='SET YOUR GOALS AND REACH THEM'/>
            <div className="row">
               {why.map((val) => (
                <div className="col-lg-3 col-sm-6">
                    <Item className="cs-item">
                        <Span className='spa'><i>{val.icon}</i></Span>
                        <Head4>{val.title}</Head4>
                        <p>{val.text}</p>
                    </Item>
                </div>
                ))}
            </div>
          </div>
        </Sec>
  )
}
