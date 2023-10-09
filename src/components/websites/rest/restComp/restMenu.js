
import React, { useState } from 'react'
import { portfolio } from '../restCommon/restData';
import styled from 'styled-components';
import { RestHeading } from '../restCommon/restHeading';

const Sec = styled.section`
   background: #fef8f6;
   padding-top: 50px;
   padding-bottom: 30px;
`;

const MItem = styled.div`
   margin-right: 0;
   padding-bottom: 30px;
`;
const MImg = styled.img`
    width: 70px;
    border-radius: 50%;
    float: left;
    border: 5px solid rgba(255, 255, 255, 0.2);
`;
const MCont = styled.div`
    margin-left: 85px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::after {
      content: "......................................................................" "...................................................................." "....................................................................";
      position: absolute;
      left: 20px;
      right: 0;
      top: -4px;
      z-index: 1;
      color: #bab3a6;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
`;
const A = styled.a`
    padding-right: 10px;
    background: #fff;
    position: relative;
    z-index: 3;
    font-weight: 700;
    color: #ed3c0d;
    transition: 0.3s;
    text-decoration: none;
    &:hover {
      color: #cda45e;
    }
`;
const Spa = styled.span`
    background: #fff;
    position: relative;
    z-index: 3;
    padding: 0 10px;
    font-weight: 600;
    color: #ed3c0d;
`;
const Ming = styled.div`
    margin-left: 85px;
    font-style: italic;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #000;
`;

const CatButton = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  padding-bottom: 30px;
`;
const But = styled.button`
  border: 1px solid #ff5900;
  outline: none;
  background: none;
  font-size: 14px;
  background-color: none;
  color: #000;
  padding: 5px 15px;
  border-radius: 50px !important;
  margin-top: 20px;
  cursor: pointer;
  text-transform: capitalize;
  margin-right: 20px;
  &:hover {
    background: #ff5900;
    color: #fff;
  }
`;


const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const RestMenu = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setList(newItems)
    if(category === "all") {
      setList(portfolio)
      return
    }
  }

  return (
    <Sec id="restmenu" className="portfolio">
      <div className="container">
      <RestHeading title='Our' spa=' Menu' parr='A good place to have a good time ...'/>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
          {category.map((category) => (
            <CatButton>
               <But className='primaryBtn' onClick={() => filterItems(category)} data-aos ='zoom-out-down'>
                  {category}
               </But>
            </CatButton>
           ))}
           </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
           {list.map((item) => (
                <MItem className="col-lg-6 menu-item ">
                   <MImg src={item.cover} className="menu-img" alt="" />
                   <MCont className="menu-content">
                       <A href="#/">{item.title}</A><Spa>{item.spa}</Spa>
                   </MCont>
                   <Ming className="menu-ingredients">
                       {item.par}
                   </Ming>
                </MItem>
            ))}
        </div>
      </div>
    </Sec>
  )
}
