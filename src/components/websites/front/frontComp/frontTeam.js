
import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { team } from '../frontCommon/frontData';
import styled from 'styled-components';
import { FrontHeading } from '../frontCommon/frontHeading';

const Team1 = styled.div`
  background: #fafafa;
  padding-bottom: 40px;
`;
const Head2 = styled.h2`
  text-transform: capitalize;
  margin: 30px 0;
`;
const Imag = styled.img`
  border-radius: 8px;
  width: 350px;
  height: 350px;
`;
const Soc = styled.div`
  margin: 30px 0;
`;
const Icon = styled.i`
  font-size: 25px;
  margin: 0 10px !important;
  color: #7564e5;
`;

export const FrontTeam = () => {
  return (
    <Team1 id="frontteam" className="team-area section-padding" >
      <div className="container">
      <FrontHeading title='Team' par='Lorem ipsum dolor sit amet, consectetur adipisicing elit...' />
        <div className="row">
         {team.map((val) => (
          <div className="col-lg-4 col-md-12">
            <div className="single-team text-center">
              <Imag src={val.cover} alt="" className="img-fluid" data-aos='fade-down'/>
              <Head2 data-aos='fade-right'>{val.head2}</Head2>
              <p data-aos='fade-left'>
                {val.desc}
              </p>
              <Soc className="socials" data-aos="zoom-in">
                <Icon><FaFacebookF /></Icon>
                <Icon><FaTwitter /></Icon>
                <Icon><FaYoutube /></Icon>
                <Icon><FaInstagram /></Icon>
              </Soc>
            </div>
          </div>
           ))}
        </div>
      </div>
    </Team1>
  )
}
