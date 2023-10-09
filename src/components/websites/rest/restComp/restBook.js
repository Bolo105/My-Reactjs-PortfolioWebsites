import React from 'react'
import { RestHeading } from '../restCommon/restHeading';
import styled from 'styled-components'

const Sec = styled.section`
    padding-top: 70px;
`;
const Form = styled.form`
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  padding: 30px;
  background: #fff;
`;
const FormG = styled.div`
  padding-bottom: 8px;
`;
const Val = styled.div`
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
`;
const Em = styled.div`
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
`;
const Sent = styled.div`
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
`;
const Load = styled.div`
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  &::before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
`;
const Inp = styled.input`
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  height: 44px;
`;
const TextA = styled.textarea`
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  padding: 10px 12px;
`;
const SubButton = styled.button`
  background: #ff5900;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
  &:hover {
    background: #ffa575;
    font-weight: 700;
    color: #000;
  }
`;

export const RestBook = () => {
  return (
    <Sec id="restbook" className="book-a-table mb-5">
        <div className="container">
          <RestHeading title='Book with Us and... ' spa='Enjoy Our Food' parr='A good place to have a good time ...'/>
          <Form action="forms/book-a-table.php" method="post" className="php-email-form">
            <div className="row">
              <FormG className="col-lg-4 col-md-6 form-group">
                <Inp type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <Val className="validate"></Val>
              </FormG>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <Inp type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <Val className="validate"></Val>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <Inp type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <Val className="validate"></Val>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <Inp type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <Val className="validate"></Val>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <Inp type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <Val className="validate"></Val>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <Inp type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                <Val className="validate"></Val>
              </div>
            </div>
            <div className="form-group mt-3">
              <TextA className="form-control" name="message" rows="5" placeholder="Message"></TextA>
              <Val className="validate"></Val>
            </div>
            <div className="mb-3">
              <Load className="loading">Loading</Load>
              <Em className="error-message"></Em>
              <Sent className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</Sent>
            </div>
            <div className="text-center">
              <SubButton type="submit">Send Message</SubButton>
            </div>
          </Form>
        </div>
      </Sec>
  )
}
