import React from 'react'
import styled from 'styled-components';

const Foot2 = styled.footer`
    background-color: #1f1f24;
    color: #c0c0c0;
    font-family: "Plus Jakarta Sans";
    line-height: 1.7;
    padding-top: 80px;
`;
const Head = styled.h5`
    font-weight: 700;
    color: #fff;
`;
const Head1 = styled.h5`
    font-weight: 700;
    color: #4AC4F3;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    vertical-align: middle;
    &:hover {
      color: #4AC4F3;
      letter-spacing: 1.5;
    }
`;

const A = styled.a`
    transition: all 0.4s ease;
    text-decoration: none;
    color: #c0c0c0;
    &:hover {
      color: #4AC4F3;
    }
`;
const A1 = styled.a`
    font-family: 'Kaushan Script', cursive;
    transition: all 0.4s ease;
    text-decoration: none;
    color: #4AC4F3;;
    &:hover {
        color: #4AC4F3;;
     }
`;

const Ul = styled.ul`
    list-style: none;
`;
const FootT = styled.div`
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const FootB = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const BooksFooter = () => {
  return (
    <Foot2 id='booksfooter' className='footer2'>
        <FootT className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-sm-6 col-lg-4">
                      <Head1>Books.com</Head1>
                    </div>
                    <div className="col-sm-6 col-lg-2 ms-auto">
                        <Head>LINKS</Head>
                        <Ul className="p-0">
                            <li><A href="#/">Home</A></li>
                            <li><A href="#/">Popular</A></li>
                            <li><A href="#/">Authors</A></li>
                            <li><A href="#/">Temathics</A></li>
                        </Ul>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <Head>CONTACT US</Head>
                        <Ul className="p-0">
                            <li>(414) 586 - 3017</li>
                            <li>New York, NY 3300</li>
                            <li>www.example.com</li>
                        </Ul>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <Head>FOLLOW US</Head>
                        <Ul className="p-0">
                            <li><A href="#twi">Facebook</A></li>
                            <li><A href="#ins">Twitter</A></li>
                            <li><A href="#dri">Instagram</A></li>
                            <li><A href="#dri">Linkedin</A></li>
                        </Ul>
                    </div>
                </div>
            </div>
        </FootT>
        <FootB className="footer-bottom2">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <p className="mb-0">Copyright By © Books.com - 2023</p>
                    </div>
                    <div className="col-auto">
                        <p className="mb-0">Designed by <A1 href="#sat"><b>makeItHappend!!!</b></A1></p>
                    </div>
                </div>
            </div>
        </FootB>
    </Foot2>
        
  )
}
