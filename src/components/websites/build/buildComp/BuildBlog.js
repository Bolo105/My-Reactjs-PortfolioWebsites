
import React from 'react'
import { blog } from '../buildCommon/BuildData';
import styled from "styled-components";
import { BuildHeading } from '../buildCommon/BuildHeading';

const BlogWrapper = styled.div`
padding-bottom: 50px;
padding-top: 50px;
  img {
    width: 100%;
    height: 300px;
  }
  .box {
    background-color: #212222;
    border-radius: 10px;
    color: #fff;
  }
  .text {
    padding: 10px 30px;
  }
  h3 {
    font-size: 18px;
    text-align: left;
    margin-top: 8px;
    margin-bottom: 10px;
    color: #fff;
  }
  h4 {
    font-size: 16px;
    text-align: left;
    margin-top: 6px;
    margin-bottom: 25px;
    color: #96b9d8;
  }
  p {
    font-size: 15px;
    margin-top: 6px;
    color: silver;
    line-height: 2;
    font-weight: 300;
    text-align: left;
  }
`;
 

export const BuildBlog = () => {
  return (
    <BlogWrapper id="buildblog" className="blog section-padding" >
      <div className="container">
        <BuildHeading title="Blog" par="Here is a sentence that talks about the section..." />
        <div className="row">
          {blog.map((item) => (
            <div className="col-12 col-md-12 col-lg-4 my-3">
              <div className='box' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} className='img-fluid' alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <h4 data-aos='fade-left'>
                    By {item.author} {item.date}
                  </h4>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlogWrapper>
  )
}
