import React from 'react'
import { contact } from './StartProfileData'
import { personal } from './StartProfileData';
import { skills } from './StartProfileData';
import { FaCheck, FaRegDotCircle } from 'react-icons/fa';
import { project } from './StartProfileData';
import { education } from './StartProfileData';
import { experience } from './StartProfileData';
import about3 from '../startImg/about3.jpg'
import styled from 'styled-components'

const Sec = styled.section`
   padding-top: 100px;
`;

const BackCont = styled.div`
    background: darkcyan;
`;

const I = styled.i`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const HtmlBack = styled.div`
   width: 90%; 
   background: #E65100;
`;
const BootBack = styled.div`
   width: 80%; 
   background: #563d7c;
`;
const CssBack = styled.div`
   width: 70%; 
   background: #0277BD;
`;
const JsBack = styled.div`
   width: 60%; 
   background: #FFD600;
`;
const ReactBack = styled.div`
   width: 50%; 
   background: #61DBFB;
`;
const A = styled.a`
   text-decoration: none;
`;
export const StartProfile = () => {
  return (

    <Sec id ='startprofile' className="bg-light">
       <div className = "container py-5">
          <div className = "row">

             <BackCont className = "col-lg-4 text-white text-center py-4">
                <div className = "header-left">
                   <img src={about3} className = "img-thumbnail rounded-circle mb-2" alt="" />
                   <h1 className = "display-5">Boris ELias</h1>
                   <h4 className = "lead text-uppercase text-white-80 mb-4">Frontend Web Developer</h4>
                </div>
                <div>
                   <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">Contact</h5>
                   <ul className = "list-unstyled text-white-80 ml-5 py-2 text-left">
                     {contact.map((val) => (
                      <li><I>{val.icon}</I>{val.par}</li>
                      ))}
                   </ul>
                </div>
             </BackCont>

             <div className = "col-lg-8 bg-light text-dark py-4 px-5">
               <div className = "header-right">
                  <h4 className = "text-uppercase">Profile</h4>
                  <hr /><br />
                  <h5><i><FaRegDotCircle /></i> Personal information.</h5><br />
                  {personal.map((val) => (
                  <p><i>{val.icon}</i>{val.par1}<br />{val.par2}</p>
                  ))}
                  <hr /><br />
                  <h5><i><FaRegDotCircle /></i> Skills</h5><br />
                  <div className = "container">
                     <div className = "row text-center">
                        {skills.map((val) => (
                         <div className = "skills-box col-lg-2 col-md-6">
                             <div className = "skills-icon">
                               <i>{val.icon}</i>
                             </div>
                             <div className = "skills-text">
                                 <h6>{val.par}</h6>
                             </div>
                         </div>
                         ))}
                     </div><br />

                     <div className = "row">
                       <div className = "col-md-12">
                          <div className = "progress-title">
                               <h6>HTML</h6>
                               <div className = "progress">
                                   <HtmlBack className = "progress-bar" >
                                      <div className = "progress-value">90%</div>
                                   </HtmlBack>
                               </div>
                          </div>
                          <div className = "progress-title">
                               <h6>BOOTSTRAP</h6>
                               <div className = "progress">
                                  <BootBack className = "progress-bar" >
                                     <div className = "progress-value">80%</div>
                                  </BootBack>
                               </div>
                          </div>
                          <div className = "progress-title">
                               <h6>CSS</h6>
                               <div className = "progress">
                                   <CssBack className = "progress-bar" >
                                       <div className = "progress-value">70%</div>
                                   </CssBack>
                               </div>
                          </div>
                          <div className = "progress-title">
                               <h6>JAVASCRIPT</h6>
                               <div className = "progress">
                                   <JsBack className = "progress-bar">
                                       <div className = "progress-value">60%</div>
                                   </JsBack>
                               </div>
                          </div>
                          <div className = "progress-title">
                           <h6>REACT JS</h6>
                           <div className = "progress">
                               <ReactBack className = "progress-bar" >
                                   <div className = "progress-value">50%</div>
                               </ReactBack>
                           </div>
                           </div>
                       </div>
                     </div>
                  </div><br /><br /><hr /><br />

                  <h5><i><FaRegDotCircle /></i> Projects</h5><br />
                     {project.map((val) => (
                     <p>
                        <i>{val.icon}</i>{val.par}<br />
                     </p>
                     ))}
                        <hr /><br />

                  <h5><i><FaRegDotCircle /></i> Education.</h5><br />
                    {education.map((val) => (
                    <p>
                        <i>{val.icon}</i>{val.par} <br />
                        <A href={val.link} target="_blank">{val.title}</A>
                    </p>
                    ))}
                     <hr /><br />

                  <h5><i><FaRegDotCircle /></i> Experience.</h5><br />
                  {experience.map((val) => (
                  <p>
                     <i>{val.icon}</i>{val.par}<br />
                  </p>
                   ))}
                  <hr /><br />

                  <h5><i><FaRegDotCircle /></i> Summarizing.</h5><br />
                  <p><i><FaCheck /></i> What I can do....?<br />
                     How do my job:
                     Design and layout the websites with html, css and bootstrap.
                     I use the Styled-components library to work the styles within the functional components of React Js.
                     I work from a design made in Figma or Sketch, and I can customize ready-made site templates, or I can also create my own designs based on what the client wants.
                     I use photoshop for design and image editing. I work the animations with Css libraries like Aos and animate Css. I work on the responsive design with media queries, and the Bootstrap Grid.
                     I work the functionality of the site with react js, from functional components using the hooks of the library.
                     I work site routing using React-router.I use git and github as tools to share teamwork. I know how to publish a website in the cloud with his hosting and domain.
                     I work with modular programming, that is: I create functional components in React Js, 
                     which include: the structure in Jsx, the styles with Styled-components and the functionality with React Js.<br />
                     My strengths: Unlimited motivation and hard work, my age: I am an experienced person 
                     and I know what I want; My Opportunities: Great job opportunities, My Weaknesses: My English 
                     language is not that fluent, but I can communicate, My Threats: If there is one, I will transform it into an opportunity...<br />
                     my projection for the future:
                     Continue learning especially specializing in the development of applications made with React Js...
                     </p>
                     <hr /><br />
               </div>
            </div>
          </div>
       </div>
    </Sec>

  )
}