import React from 'react'
import styled from 'styled-components';

const Title = styled.h2`
      font-size: 30px;
      font-weight: bold;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      &:before {
         position: absolute;
         content: "";
         width: 4px;
         height: 50px;
         background-color: #02f7df;
         left: -20px;
         top: 50%;
         -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
              transform: translateY(-50%);
     }
`;
const News = styled.section`
   padding-top: 90px;
   padding-bottom: 50px;
   background-color: rgba(179, 179, 179, 0.05);
`;
const Parr = styled.p`
   max-width: 600px;
`;
const InpGroup = styled.div`
   max-width: 500px;
`;
const FormCont = styled.input`
   border-top-left-radius: 25px;
   border-bottom-left-radius: 25px;
`;
const Btn = styled.button`
   background-color: #02f7df;
   color: #000;
   border-color: #02f7df; 
   border-top-right-radius: 25px;
   border-bottom-right-radius: 25px;
   &:hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
   }
`;

export const EcommNews = () => {
  return (
    
       <News id = "ecommnews" className = "">
        <div className = "container">
            <div className = "d-flex flex-column align-items-center justify-content-center">
                <div className = "title text-center pt-3 pb-5">
                    <Title className = "position-relative d-inline-block ms-4" data-aos="zoom-in" data-aos-duration="1000">Newsletter Subscription</Title>
                </div>
                <Parr className = "text-center text-muted" data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?</Parr>
                <InpGroup className = "input-group mb-3 mt-3" data-aos="fade-left" data-aos-duration="1000">
                    <FormCont type = "text" className = "form-control" placeholder="Enter Your Email ..." />
                    <Btn className = "btn" type = "submit">Subscribe</Btn>
                </InpGroup>
            </div>
        </div>
       </News>

  )
}

