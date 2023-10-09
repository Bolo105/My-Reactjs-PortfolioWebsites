import React from 'react'
import { FaChevronRight, FaMapMarkerAlt, FaRegEnvelope, FaPhone, FaFacebookF,
    FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import styled from 'styled-components';

const Brand = styled.a`
   font-family: "Oswald", sans-serif !important;
   letter-spacing: 2px;
   color: #02f7df;
   font-size: 25px;
   font-weight: 700;
   transition: all 1s ease;
   &:hover {
       color: #02bdaa;
   }
`;
const Lista = styled.a`
    transition: 0.3s ease;
    color: #fff;
    &:hover {
        color: #02f7df;
    }
`;

export const EcommFooter = () => {
  return (
    <div>
       <footer id = "ecommfooter" className = "bg-dark py-5">
        <div className = "container">
            <div className = "row text-white g-4">
                <div className = "col-md-6 col-lg-3">
                    <Brand className = "text-decoration-none brand"  href = "/">eBooks</Brand>
                    <p className = "text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</p>
                </div>

                <div className = "col-md-6 col-lg-3">
                    <h5 className = "fw-light">Links</h5>
                    <ul className = "list-unstyled">
                        <li className = "my-3">
                            <Lista href = "#header" className = "text-decoration-none">
                                <FaChevronRight /> Home
                            </Lista>
                        </li>
                        <li className = "my-3">
                            <Lista href = "#collection" className = "text-decoration-none">
                                <FaChevronRight /> Collection
                            </Lista>
                        </li>
                        <li className = "my-3">
                            <Lista href = "#blog" className = "text-decoration-none">
                                <FaChevronRight /> Blog
                            </Lista>
                        </li>
                        <li className = "my-3">
                            <Lista href = "#about" className = "text-decoration-none">
                                <FaChevronRight /> About Us
                            </Lista>
                        </li>
                        <li className = "my-3">
                            <Lista href = "#popular" className = "text-decoration-none">
                                <FaChevronRight /> Popular
                            </Lista>
                        </li>
                    </ul>
                </div>

                <div className = "col-md-6 col-lg-3">
                    <h5 className = "fw-light mb-3">Contact Us</h5>
                    <div className = "d-flex justify-content-start align-items-start my-2">
                        <span className = "me-3">
                            <FaMapMarkerAlt />
                        </span>
                        <span className = "fw-light">
                            756 Jhon Street, Massachusetts, Ms, United States of America
                        </span>
                    </div>
                    <div className = "d-flex justify-content-start align-items-start my-2">
                        <span className = "me-3">
                            <FaRegEnvelope />
                        </span>
                        <span className = "fw-light">
                            my_mail701@gmail.com
                        </span>
                    </div>
                    <div className = "d-flex justify-content-start align-items-start my-2">
                        <span className = "me-3">
                            <FaPhone />
                        </span>
                        <span className = "fw-light">
                            +1 432 567 9123
                        </span>
                    </div>
                </div>

                <div className = "col-md-6 col-lg-3">
                    <h5 className = "fw-light mb-3">Follow Us</h5>
                    <div>
                        <ul className = "list-unstyled d-flex">
                            <li>
                                <Lista href = "/" className = "text-decoration-none fs-4 me-4">
                                    <FaFacebookF />
                                </Lista>
                            </li>
                            <li>
                                <Lista href = "/" className = "text-decoration-none fs-4 me-4">
                                    <FaTwitter />
                                </Lista>
                            </li>
                            <li>
                                <Lista href = "/" className = "text-decoration-none fs-4 me-4">
                                    <FaInstagram />
                                </Lista>
                            </li>
                            <li>
                                <Lista href = "/" className = "text-decoration-none fs-4 me-4">
                                    <FaPinterest />
                                </Lista>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

