import React from 'react';
import { MdLocationPin, MdPhoneEnabled, MdOutlineMail } from 'react-icons/md';
import styled from 'styled-components';


const Sec = styled.section`
  padding-top: 70px;
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
    background: #00ff8c;
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
    background: #00ff8c;
    color: #fff;
  }

  &:hover i {
    background: #fff;
    color: #43a167;
    border: 1px solid #43a167;
  }
`;
const HeadH2 = styled.h2`
    font-size: 14px;
   font-weight: 500;
   padding: 0;
   line-height: 1px;
   margin: 0 0 5px 0;
   letter-spacing: 2px;
   color: #aaaaaa;
   font-family: "Poppins", sans-serif;
   &:after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #1acc8d;
    margin: 4px 10px;
   }
`;
const SecTitle = styled.div`
  padding-bottom: 30px;
  padding-top: 50px;
`;
const ParTitle = styled.p`
   margin: 0;
   padding: 0;
   font-size: 30px;
   font-weight: bold !important;
   text-transform: uppercase;
   font-family: "Poppins", sans-serif;
   color: #010483;
`;
const SecAd = styled.div`
     @media screen and (max-width: 992px) {
     margin-bottom: 20px;
  }
`;

export const StartContact = () => {
  return (
    <Sec id="startcontact" className="contact pb-5 bg-light">
      <div className="container">
          <SecTitle data-aos="fade-up pt-5">
            <HeadH2>Contact</HeadH2>
            <ParTitle>How to contact me...</ParTitle>
          </SecTitle>
        <div className="row no-gutters justify-content-center" data-aos="fade-up">
          <SecAd className="col-lg-5 d-flex align-items-stretch">
            <ContactInfo className="info">
              <div className="address">
                <i>
                  <MdLocationPin />
                </i>
                <h4>Address:</h4>
                <p>4522 Swako Ln, Louisville Ky, 40216</p>
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
                <p>+1 558 554 8855</p>
              </div>
            </ContactInfo>
          </SecAd>
          <div className="col-lg-5 d-flex align-items-stretch">
          <iframe 
          title="Google Maps"
          style={{ border: 0, width: '100%', height: '270px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.5535117868285!2d-85.80842034364171!3d38.173814978195146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88691234c744cf31%3A0x32c07e7376f09029!2s4522%20Swako%20Ln%2C%20Louisville%2C%20KY%2040216!5e0!3m2!1sen!2sus!4v1691155905095!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
      </div>
    </Sec>
  );
};
