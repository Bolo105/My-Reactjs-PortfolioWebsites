import React from 'react'
import { why } from '../restCommon/restData';
import styled from 'styled-components'
import { RestHeading } from '../restCommon/restHeading';

const Sec = styled.section`
    padding-top: 90px;
`;
const Box = styled.div`
    padding: 50px 30px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    transition: all ease-in-out 0.3s;
    height: 100%;
    &:hover {
      padding: 30px 30px 70px 30px;
      box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
    }
`;
const Spa = styled.span`
    display: block;
    font-size: 35px;
    font-weight: 700;
    color: #ff5900;
    font-family: 'Kaushan Script', cursive;
`;
const Head4 = styled.h4`
    font-size: 24px;
    font-weight: 600;
    padding: 0;
    margin: 20px 0;
    color: #6c665c;
`;
const Par = styled.p`
    color: #aaaaaa;
    font-size: 15px;
    margin: 0;
    padding: 0;
`;

export const RestWhy = () => {
  return (
    <Sec id="restwhyus" className="why-us py-5 ">
        <div className="container">
          <RestHeading  title='Why choose ' spa='Hartao' parr='If you want to have a good time in the company of your loved ones, come to our restaurant and you will discover ...' />
          <div className="row">
           {why.map((val) => (
            <div className="col-lg-4 my-3">
              <Box className="box text-center">
                <Spa>{val.spa}</Spa>
                <Head4>{val.title}</Head4>
                <Par>{val.par}</Par>
              </Box>
            </div>
            ))}
          </div>
        </div>
      </Sec>
  )
}
