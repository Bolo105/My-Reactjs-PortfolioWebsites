import React from 'react'
import { Links } from '../gymCommon/GymData';
import { Contact } from '../gymCommon/GymData';
import { Socials } from '../gymCommon/GymData';
import { RiArrowRightSLine } from 'react-icons/ri';
import styled from 'styled-components';

const Foot = styled.footer`
    background: #000;
    padding: 0 0 30px 0;
    color: #eee;
    font-size: 14px;
`;
const FootT = styled.div`
    background: #111;
    padding: 60px 0 30px 0;
`;
const FootI = styled.div`
    margin-bottom: 30px;
`;
const Head3 = styled.h3`
    font-size: 30px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 10px;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    border-left: 4px solid #18d26e;
    @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Par = styled.p`
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
    color: #eee;
`;
const Head4 = styled.h4`
    font-size: 14px;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 12px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      right: 0;
      background: #555;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 60px;
      background: #18d26e;
    }
`;
const FootL = styled.div`
   margin-bottom: 30px;
`;
const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
const Icon = styled.i`
    padding-right: 8px;
    color: #ddd;
    font-size: 18px;
`;
const Li = styled.li`
    border-bottom: 1px solid #333;
    padding: 10px 0;
    &:first-child {
      padding-top: 0;
    }
`;
const A = styled.a`
   color: #ddd;
   text-decoration: none;
   &:hover {
    color: #18d26e;
   }
`;
const Lo = styled.li`
   margin: 30px 0;
   font-style: normal !important;
`;
const News = styled.div`
    margin-bottom: 30px;
    p {
      line-height: 30px;
     }
    [type="email"] {
      border: 0;
      padding: 6px 8px;
      width: 65%;
    }
    [type="submit"] {
      background: #18d26e;
      border: 0;
      width: 35%;
      padding: 6px 0;
      text-align: center;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: #18d26e;
        color: #111;
        font-weight: 700;
      }
    }
  
`;
const LineFiveLink = styled.a`
  background: #494848;
  width: 35px;
  height: 35px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 0;
  margin-left: 8px;
  @media screen and (max-width: 992px) {
    width: 30px;
    height: 30px;
  }
`;

const LineFiveIcon = styled.i`
  font-size: 20px;
  color: #fff;
  padding: 8px 10px;
  @media screen and (max-width: 992px) {
    font-size: 16px;
    color: #000;
    padding: 8px 10px;
  }
`;

const FooterBottom = styled.div`
  background: #000;
  padding-top: 30px;
  padding-bottom: 0px;

  p {
    text-align: left;
  }
  a {
    color: #00ff8c;
    text-decoration: none;
  }
  span {
    color: #fff;
  }
  .line-five ul {
    text-align: right;
  }

  .line-five .social-icons .boton:hover {
    background: #00ff8c;
  }
`;

export const GymFooter = () => {
  return (
    <Foot id="gymfooter">
        <FootT className="footer-top">
          <div className="container">
            <div className="row">
    
              <FootI className="col-lg-3 col-md-6 footer-info">
                <Head3>MUSCLE<span>&</span>NOW</Head3>
                <Par>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita 
                    valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet 
                    proin fermentum leo. Amet volutpat consequat mauris nunc congue.</Par>
              </FootI>
    
              <FootL className="col-lg-3 col-md-6 footer-links">
                <Head4>Useful Links</Head4>
                <Ul>
                  {Links.map((val) => (
                  <Li>
                    <Icon>
                      <RiArrowRightSLine />
                    </Icon> 
                    <A href="#home">
                    {val.text}
                    </A>
                  </Li>
                  ))}
                </Ul>
              </FootL>
    
              <div className = "col-lg-3 mx-auto mb-4">
                <Head4>Contact</Head4>
                <ul className = "list-unstyled">
                  {Contact.map((val) => (
                  <Lo>
                    <i>{val.icon}&nbsp; &nbsp;</i> {val.text}
                  </Lo>
                  ))}
                </ul>
              </div>
    
              <News className="col-lg-3 col-md-6 footer-newsletter">
                <Head4>Our Newsletter</Head4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum
                    dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </News>
    
            </div>
          </div>
        </FootT>
    
        <FooterBottom className = "footer-bottom">
            <div className = "container">
               <div className = "row">
                <div className = "col-md-8 col-sm-6 col-xs-12 line-four">
                    <p className = "copyright-text">Copyright &copy; 2020 All Rights Reserved by
                       <a href = "#/"> MUSCLE<span>&</span>NOW
                       </a>
                    </p>
                  </div>
                  <div className = "col-md-4 col-sm-6 col-12 line-five">
                    <ul className = "social-icons list-unstyled">
                     {Socials.map((val) => (
                     <LineFiveLink className = "boton" href = "#/">
                        <LineFiveIcon>
                          {val.icon}
                        </LineFiveIcon>
                     </LineFiveLink>
                     ))}
                    </ul>
                  </div>
               </div>
            </div>
          </FooterBottom>
      </Foot>
  )
}
