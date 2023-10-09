import React from 'react'
import { blog } from '../ecommCommon/EcommData';
import styled from 'styled-components';

const Sec = styled.section`
    padding-top: 70px;
`;
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
const Imag = styled.img`
     width: 100%; 
     height: 282px;
`;
const Btn = styled.a`
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    color: rgb(85, 85, 85);
    padding: 10px 28px;
    border-radius: 25px;
    border: 1px solid rgb(85, 85, 85);
    text-decoration: none;
    &:hover {
        background-color: #02f7df;
        color: #000;
        font-weight: 700;
    }
`;

export const EcommBlog = () => {
  return (

       <Sec id = "ecommblog" className = "">
        <div className = "container">
            <div className = "title text-center py-5">
                <Title className = "position-relative d-inline-block" data-aos="zoom-in" data-aos-duration="1000">Blog</Title>
            </div>
            <div className = "row g-3">
               {blog.map((item) => (
                <div className = "card border-0 col-md-4 col-lg-4 bg-transparent my-3" data-aos="fade-up" data-aos-duration="1000">
                    <Imag src={item.cover} alt = "" className='img-fluid'/>
                    <div class = "card-body px-0">
                       <h4 class = "card-title">{item.title}</h4>
                       <p class = "card-text mt-3 text-muted">{item.text}</p>
                       <p class = "card-text">
                         <small class = "text-muted">
                            <span class = "fw-bold">{item.job}</span>{item.name}
                         </small>
                       </p>
                       <Btn href = "/" class = "btn">Read More</Btn>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </Sec>

  )
}

