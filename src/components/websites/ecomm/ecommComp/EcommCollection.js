import React, { useState } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { collection } from '../ecommCommon/EcommData';
import styled from 'styled-components';

const Port = styled.div`
  margin-bottom: 0px;
  padding-top: 70px;

  .portfolio-item {
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;

    .portfolio-info {
      opacity: 1;
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: -90px;
      z-index: 2 !important;
      transition: all ease-in-out 0.3s;
      background: #8fc04e !important;
      padding: 15px 20px;
 
      h4 {
        font-size: 18px;
        color: #fff;
        font-weight: 600;
      }

      p {
        color: #fff;
        font-size: 14px;
        margin-bottom: 0;
      }

      .preview-link,
      .details-link {
        position: absolute;
        right: 70px;
        font-size: 24px;
        top: calc(50%);
        color: white;
        transition: ease-in-out 0.3s;
      }

      .preview-link:hover,
      .details-link:hover {
        color: #d6e8bf !important;
      }

      .details-link {
        right: 15px;
      }
    }

    &:hover img {
      top: -30px;
    }

    &:hover .portfolio-info {
      opacity: 1;
      bottom: 0;
    }
  }
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
    width: 400px;
    height: 395px;
`;

const CatButton = styled.div`
display: inline-block;
justify-content: center;
align-items: center;
margin: 0px 5px;
padding-bottom: 30px;

`;
const But = styled.button`
  border: 1px solid #00ffe5;
  outline: none;
  background: none;
  font-size: 14px;
  background-color: none;
  color: #000;
  padding: 10px 35px;
  border-radius: 25px !important;
  margin-top: 20px;
  cursor: pointer;
  text-transform: capitalize;
  margin-right: 20px;
  &:hover {
    background: #00ffe5;
    color: #000;
  }
  @media(max-width: 576px){
      font-size: 10px;
      padding: 7px 20px;
      margin: 0 5px;
    }

`;

const allCategory = ["all", ...new Set(collection.map((item) => item.category))]
export const EcommCollection = () => {
  const [list, setList] = useState(collection);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = collection.filter((item) => item.category === category)
    setList(newItems)
    if(category === "all") {
      setList(collection)
      return
    }
  }

  return (
    <Port id="ecommcollection" className="portfolio">
      <div className="container">
             <div className = "title text-center pt-5 pb-3">
                <Title className = "position-relative d-inline-block" data-aos="zoom-in" data-aos-duration="1000">Collection</Title>
            </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
          {category.map((category) => (
            <CatButton>
               <But className='primaryBtn' onClick={() => filterItems(category)} data-aos ='zoom-out-down' data-aos-duration="1000">
                  {category}
               </But>
            </CatButton>
           ))}
           </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
           {list.map((item) => (
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <Imag src={item.cover} className="img-fluid" alt="" />
            <div class = "text-left">
                <div class = "rating mt-3">
                  <span style={{color: '#00ffe5'}}><i><FaRegStar /></i></span>
                  <span style={{color: '#00ffe5'}}><i><FaRegStar /></i></span>
                  <span style={{color: '#00ffe5'}}><i><FaRegStar /></i></span>
                  <span style={{color: '#00ffe5'}}><i><FaRegStar /></i></span>
                  <span style={{color: '#00ffe5'}}><i><FaRegStar /></i></span>
                </div>
                <p class = "text-capitalize my-1">{item.title}</p>
                <span class = "fw-bold">{item.price}</span>
            </div>
          </div>
            ))}
        </div>
      </div>
    </Port>
  )
}
