import React from 'react'
import styled from 'styled-components'
import { GymHeading } from '../gymCommon/GymHeading';

const Wr = styled.div`
   background-color: #ebfff4;
   padding-top: 100px;
   padding-bottom: 50px;
`;
const Form = styled.div`
    width: 100%;
    max-width: 100%; 
    margin: 0 auto; 
`;
const Btn = styled.button`
   background-color: #18d26e;
   color: #fff;
   &:hover {
    background-color: #18d26e;
    color: #010101;
   }
`;

export const GymContact = () => {
  return (
    <Wr id='gymcontact'>
      <div  className="container px-0">
        <GymHeading title='Contact' parr='How to contact Us'/>
        <div className="row mt-5 mx-0">
            <div className="col-12 px-0" style={{height: '500px'}}>
                <div className="position-relative h-100">
                <iframe className="position-relative w-100 h-100"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.7249762945767!2d-85.70593712354307!3d38.16983078930445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690c15d8ba5f37%3A0xc4d3a86f9563fa8c!2s5549%20Mildenhall%20Way%2C%20Louisville%2C%20KY%2040213!5e0!3m2!1sen!2sus!4v1691259036604!5m2!1sen!2sus" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
                </div>
            </div>
        </div>
        <div className="row mx-0 justify-content-center">
            <Form className="col-lg-12 col-md-12 col-sm-10 px-0">
                <div className="contact-form bg-transparent rounded p-5">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-light border-2 p-2" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control bg-light border-2 p-2" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control bg-light border-2 p-2" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control bg-light border-2 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="text-center">
                            <Btn className="btn text-uppercase py-2 px-4" type="submit" id="sendMessageButton">Send Message</Btn>
                        </div>
                    </form>
                </div>
            </Form>
        </div>
       </div>
    </Wr>
  )
}
