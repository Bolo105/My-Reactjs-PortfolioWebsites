import React from 'react'
import styled from 'styled-components'

const Btn = styled.input`
   width: 100%;
   background-color: #56b8e6;
   &:hover {
    background-color: #56b8e6;
   }
`;
const Inp = styled.input`
   margin-bottom: 20px;
`;

export const PhotoContact = () => {
  return (
    
   <div id = "photocontact" className="section">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header">
            <h2 className = " form-title text-center pt-5 pb-3">Contact Us</h2>
          </div>
          <form name = "form" className="col-md-6 offset-md-3 mb-5">
            <div className="form-group">
              <Inp className = "form-control" name = "name" placeholder = "Insert your name" type="text" />
            </div>
            <div className="form-group">
              <Inp className = "form-control" name = "email" placeholder = "Insert your e-mail" type="text" />
            </div>
            <div className="form-group">
              <Inp className = "form-control" name = "subject" placeholder = "subject" type="text" />
            </div>
            <div className="form-group">
              <Inp className = "form-control" name = "message" placeholder = "your message" type="text" />
            </div>
            <div className="form-group">
              <Btn className = "btn  btn-block" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}