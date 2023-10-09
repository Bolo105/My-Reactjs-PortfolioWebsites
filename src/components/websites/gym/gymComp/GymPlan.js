import React from 'react'
import { GymHeading } from '../gymCommon/GymHeading';
import styled from 'styled-components'
import { plan } from '../gymCommon/GymData';

const Sec = styled.section`
  background: #ebfff4;
	padding: 100px 0;
`;
const A = styled.a`
   text-decoration: none !important;
   font-size: 14px;
	font-weight: bold;
	padding: 10px 45px;
	color: #333;
	background: #a9a9a9;
	text-transform: uppercase;
	margin-bottom: 20px; 
	display: inline-block;
`;
const St = styled.div`
  padding: 40px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #464646;
  
  h4 {
    font-size: 24px;
    font-weight: 600;
  }
  
  h2 {
    font-size: 50px;
    font-weight: 700;
    margin-top: 25px;
  }
  
  h6 {
    padding-bottom: 25px;
    font-weight: 600;
  }
  .primary-boton {
   font-size: 14px;
	font-weight: bold;
	padding: 10px 45px;
	color: #333;
	background: #a9a9a9;
	text-transform: uppercase;
	margin-bottom: 20px; 
	display: inline-block;
  }
  ul {
   margin-top: 0;
	margin-bottom: 40px;
	padding: 0px;
	list-style: none;
  }
  li {
   font-size: 16px;
	font-weight: 600;
	text-transform: capitalize;
	padding-bottom: 10px;

  }
  
  &:hover {
    background: #18d26e;
    border-color: #fff;
    ${A} {
      background: #444;
	   color: #fff;
    }
    h4 {
      color: #fff;
    }
  
    h2,
    h6 {
      color: #444;
    }
    ul li {
      color: #fff;
	   font-weight: 600;
    }
  }
`;

export const GymPlan = () => {
  return (
    <Sec id="gymplan" className = "pricing-table-area" >
    <div className = "container">
      <GymHeading title='YOUR PLAN' parr='CHOOSE YOUR PLAN'/>
       <div className = "row">
         {plan.map((val)=> (
          <div className = "col-lg-4 col-md-12 my-3">
             <St className = "single-table">
                <h4>{val.cl}</h4>
                <h2>{val.pr}<span></span></h2>
                <h6>{val.tp}</h6>
                <ul>
                   <li>{val.p1}</li>
                   <li>{val.p2}</li>
                   <li>{val.p3}</li>
                   <li>{val.p4}</li>
                   <li>{val.p5}</li>
                   <li>{val.p6}</li>
                </ul>
                <A className = "primary-btn" href="#/">Enroll Now</A>
             </St>
          </div>
          ))}
       </div>
    </div>
 </Sec>
  )
}
