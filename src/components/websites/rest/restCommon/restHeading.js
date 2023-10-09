import React from 'react'
import styled from 'styled-components'

const Sec = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;
const Head2 = styled.h2`
  font-family: 'Kaushan Script', cursive;
  margin: 15px 0 0 0;
  font-size: 38px;
  font-weight: 700;
  color: #5f5950;
`;
const Spa = styled.span`
  color: #ff5900;
`;
const Par = styled.p`
  margin: 15px auto 0 auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size:20px;
  @media (min-width: 1024px) {
    width: 50%;
}
`;

export const RestHeading = ({title, spa, parr}) => {
  return (
    <div>
      <Sec class = "section-heading">
          <Head2 data-aos="zoom-in-down">{title}<Spa>{spa}</Spa></Head2>
          <Par class="page-description text-center">{parr}</Par>
      </Sec>
    </div>
  )
}
