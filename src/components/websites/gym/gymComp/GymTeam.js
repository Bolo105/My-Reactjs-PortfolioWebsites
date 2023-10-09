import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { team } from '../gymCommon/GymData';
import styled from 'styled-components';
import { GymHeading } from '../gymCommon/GymHeading';

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 100px 0 15px 0;
`;

const TeamImage = styled.div`
  position: relative;
`;

const TeamImageImg = styled.img`
  width: 100%;
`;

const TeamItem = styled.div`
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;

  .team-text {
    position: relative;
    padding: 25px 15px;
    text-align: center;
    background: #030f27;
    transition: 0.5s;
    
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #18d26e;
      transition: 0.5s;
      font-family: "Oswald", sans-serif;
    }
    p {
      margin: 0;
      color: #fff;
    }
  }
  &:hover .team-text {
      background: #18d26e;
    }

    &:hover .team-text h2 {
      color: #030f27 !important;
      letter-spacing: 2px !important;
    }

  .team-social {
    position: absolute;
    width: 100px;
    top: 0;
    left: -50px;
    display: flex !important;
    flex-direction: column !important;
    font-size: 0px;

    a {
      position: relative;
      left: 0;
      width: 50px;
      height: 50px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #fff;
    }
  }

    .team-text {
      background: #030f27;
    }

    .team-text h2 {
      color: #18d26e !important;
      letter-spacing: 1px;
    }
    &:hover{
    .team-social a:first-child {
      background: #00acee;
      left: 50px;
      transition: 0.3s 0s;
    }

    .team-social a:nth-child(2) {
      background: #3b5998;
      left: 50px;
      transition: 0.3s 0.1s;
    }

    .team-social a:nth-child(3) {
      background: #0e76a8;
      left: 50px;
      transition: 0.3s 0.2s;
    }

    .team-social a:nth-child(4) {
      background: #3f729b;
      left: 50px;
      transition: 0.3s 0.3s;
    }

  }
`;

export const GymTeam = () => {
  return (
    <TeamContainer id="gymteam" className = "team" >
        <div className = "container">
            <GymHeading title='Our Team' parr='Our Trainers'/>
            <div className="row">
              {team.map((val) => (
               <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <TeamItem className = "team-item">
                        <TeamImage className = "team-img">
                           <TeamImageImg src={val.cover} alt="" />
                        </TeamImage>
                        <div className="team-text">
                            <h2>{val.name}</h2>
                            <p>{val.job}</p>
                        </div>
                        <div className="team-social">
                           <a className = "social-tw" href="#/"><i><FaTwitter /></i></a>
                           <a className = "social-tw" href="#/"><i><FaFacebookF /></i></a>
                           <a className = "social-tw" href="#/"><i><FaLinkedinIn /></i></a>
                           <a className = "social-tw" href="#/"><i><FaInstagram /></i></a>   
                        </div>
                    </TeamItem>
                </div>
                ))}
            </div>
        </div>
    </TeamContainer>
  )
}
