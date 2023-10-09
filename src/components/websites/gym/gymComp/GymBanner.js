import React from 'react'
import styled from 'styled-components'
import banner from '../gymImg/banner.jpg'

const Sec = styled.section`
    background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff !important;
    padding-bottom: 60px;
    display: flex;
	margin-top: -43px;
    margin-bottom: -15px;
	height: 90vh;
	display: -webkit-box;
	display: -ms-flexbox;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`;
const Tips = styled.div`
    margin-bottom: 35px;
    font-size: 20px;
	color: #c4c4c4;
	font-weight: 700;
	text-transform: uppercase;
    @media(max-width: 1024px){
      font-size: 14px;
    }
    @media(max-width: 576px){
      font-size: 10px;
    }
`;
const Head2 = styled.h2`
    font-size: 48px;
	color: #ffffff;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 25px;
    @media(max-width: 1024px){
      font-size: 34px;
    }
    @media(max-width: 576px){
      font-size: 30px;
    }
`;
const Btn = styled.a`
    display: inline-block;
	font-size: 14px;
	padding: 17px 30px 16px;
	color: #ffffff;
	background: #18d26e;
	line-height: normal;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-weight: 700;
    background: transparent;
	border: 2px solid #18d26e;
    text-decoration: none !important;
    &:hover {
        background: #18d26e;
	    border-color: #18d26e;
	    color: #000;
    }
    @media(max-width: 1024px){
        padding: 14px 26px 13px;
    }
    @media(max-width: 576px){
        padding: 10px 22px 9px;
    }
`;

export const GymBanner = () => {
  return (
    <Sec id='gymbanner' className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="bs-text">
                        <Head2>subscribe to enjoy your time with us... now</Head2>
                        <Tips className="bt-tips">your health comes first.</Tips>
                        <Btn href="#/" className="primary-btn  btn-normal">Appointment</Btn>
                    </div>
                </div>
            </div>
        </div>
    </Sec>
  )
}