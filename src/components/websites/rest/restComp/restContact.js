import React from 'react';
import { MdLocationPin, MdPhoneEnabled, MdOutlineMail } from 'react-icons/md';
import styled from 'styled-components';
import { RestHeading } from '../restCommon/restHeading';

const Sec = styled.section`
  background: #fef8f6;
  padding-top: 60px;
`;

const ContactInfo = styled.div`
  padding: 30px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);

  & i {
    font-size: 20px;
    color: #fff;
    float: left;
    width: 44px;
    height: 44px;
    background: #ff5900;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }

  & h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #21413c;
  }

  & p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #43857a;
  }

  & .email p {
    padding-top: 5px;
  }

  & .social-links {
    padding-left: 60px;
  }

  & .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #333;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    margin-right: 10px;
  }

  & .social-links a:hover {
    background: #1bac91;
    color: #fff;
  }

  &:hover i {
    background: #fff;
    color: #ff5900;
    border: 1px solid #ff5900;
  }
`;


export const RestContact = () => {
  return (
    <Sec id="restcontact" className="contact pb-5">
      <div className="container">
        <RestHeading title='How to Contact' spa=' Us' parr='A good place to have a good time ...'/>
        <div className="row no-gutters justify-content-center" data-aos="fade-up">
          <div className="col-lg-5 d-flex align-items-stretch my-3">
            <ContactInfo className="info">
              <div className="address">
                <i>
                  <MdLocationPin />
                </i>
                <h4>Address:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email mt-4">
                <i>
                  <MdOutlineMail />
                </i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone mt-4">
                <i>
                  <MdPhoneEnabled />
                </i>
                <h4>Phone:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </ContactInfo>
          </div>
          <div className="col-lg-5 d-flex align-items-stretch">
            <iframe
              title="Google Maps"
              style={{ border: 0, width: '100%', height: '270px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Sec>
  );
};