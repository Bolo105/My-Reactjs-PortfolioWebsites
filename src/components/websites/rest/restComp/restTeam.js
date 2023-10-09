import React from 'react'
import { team } from '../restCommon/restData'
import face from '../restImg/face.png'
import link from '../restImg/link.png'
import twi from '../restImg/twi.png'
import teambg from '../restImg/teambg.jpg'
import styled from 'styled-components'

const Main = styled.div`
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${teambg}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  z-index:0 !important;
  
`;
const Sec = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;
const Head2 = styled.h2`
  font-family: 'Kaushan Script', cursive;
  margin: 15px 0 0 0;
  font-size: 38px;
  font-weight: 700;
  color: #fff;
`;
const Spa = styled.span`
  color: #ff5900;
`;
const Par = styled.p`
  margin: 15px auto 0 auto;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size:20px;
  @media (min-width: 1024px) {
    width: 50%;
}
`;
const Img = styled.img`
   border: 0;
   width: 34px;
   height: 34px;
`;
const Sf = styled.div`
    float: left;
    width: 100%;
    z-index: 1 !important;
    @media screen and (max-width: 768px) {
     margin-bottom: 20px;
}
`;
const Th = styled.div`
    float: left;
    width: 100%;
    overflow: hidden;
    background: #000;
`;
const Tc = styled.div`
    float: left;
    width: 100%;
    padding: 25px 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    text-align: center;
	background:#fff;
`;
const Head3 = styled.h3`
    font-family: 'Kaushan Script', cursive;
	font-size:28px;
    color: #ed3c0d;
`;
const Soc = styled.ul`
    display: block;
    text-align: center;
    margin: 0;
    padding: 20px 0 0 0;
    list-style: none;
    border-top: 1px solid;
`;
const Li = styled.li`
    display: inline-block;
    padding: 0 4px;
`;
const A = styled.a`
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 32px;
    border-radius: 100%;
    color: #222;
    font-size: 16px;
    display: block;
`;

export const RestTeam = () => {
  return (
    
    <Main id="restteam" className="team-main py-5 parallax">
        <div className="container">      
                    <Sec class = "section-heading">
                       <Head2 data-aos="zoom-in-down">Our <Spa data-aos="zoom-in-down">Team</Spa></Head2>
                       <Par class="page-description text-center">A good place to have a good time ...</Par>
                    </Sec>
                    <div className="team-box">
                        <div className="row">  
                          {team.map((val) => (
                            <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                                <Sf className="sf-team">
                                    <Th className="thumb">
                                        <a href="#/"><img src={val.cover} className="img-fluid" alt="" style={{width: '100%'}}/></a>
                                    </Th>
                                    <Tc className="text-col">
                                        <Head3>{val.name}</Head3>
                                        <p>{val.par1}</p>
                                        <p>{val.par2}</p>
                                        <Soc className="team-social">
                                          <Li><A href="#/"><Img src={face} alt=""  /></A></Li>
                                          <Li><A href="#/"><Img src={twi} alt=""  /></A></Li>
                                          <Li><A href="#/"><Img src={link} alt=""  /></A></Li>
                                        </Soc>
                                    </Tc>
                                </Sf>
                            </div>
                         ))}
                        </div>
                    </div>
          </div>
    </Main>
    
  )
}