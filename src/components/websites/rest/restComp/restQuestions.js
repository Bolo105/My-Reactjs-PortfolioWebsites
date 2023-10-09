import React from 'react'
import styled from 'styled-components'
import { BiHelpCircle, BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { RestHeading } from '../restCommon/restHeading';


const Faq = styled.section`
  background: #fef8f6;
  font-family: "Open Sans", sans-serif;
  padding-top: 70px;
  .section-title h2 {
    background: #e9f3dd;
  }

  .faq-list {
    padding-top: 10px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;

    ul {
      padding: 0;
      list-style: none;

      li + li {
        margin-top: 15px;
      }

      li {
        padding: 20px;
        background: #fff;
        border-radius: 4px;
        position: relative;

        a {
          display: block;
          text-decoration: none !important;
          position: relative;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: bold;
          padding: 0 30px;
          outline: none;
          cursor: pointer;
          color: #343a40;

          &.collapsed {
            color: #343a40;

            &:hover {
              color: #ff5900;
            }

            .icon-show {
              display: inline-block;
            }

            .icon-close {
              display: none;
            }
          }

          .icon-help {
            position: relative;
          }
          .icon-help  {
             font-size: 24px;
             position: absolute;
             right: 0;
             left: 20px;
             color: #ff5900 !important;
            }

          .icon-show,
          .icon-close {
            font-size: 24px;
            position: absolute;
            right: 0;
            top: 0;
          }
        }

        p {
          margin-bottom: 0;
          padding: 10px 0 0 0;
        }

        .icon-show {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .faq-list {
      padding: 0;
    }
  }
`;
const HelpIcon = styled(BiHelpCircle)`
      font-size: 24px;
      position: absolute;
      right: 0;
      left: 20px;
      color: #ff5900;
`;
    
export const RestQuestions = () => {
  return (
    <Faq id="restquestions" className="faq">
      <div className="container">
        <RestHeading title='You Can answer ' spa='Your FAQs' parr='A good place to have a good time ...' />
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="icon-help">
                <HelpIcon color='#ff5900'/>
              </i>{" "}
              <a
                href="#/"
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1"
              >
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className="icon-show">
                  <BiChevronDown />
                </i>
                <i className="icon-close">
                  <BiChevronUp />
                </i>
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="icon-help">
                <HelpIcon color='#ff5900'/>
              </i>{" "}
              <a
                href="#/"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                Feugiat scelerisque varius morbi enim nunc?{" "}
                <i className="icon-show">
                  <BiChevronDown />
                </i>
                <i className="icon-close">
                  <BiChevronUp />
                </i>
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="icon-help">
                <HelpIcon color='#ff5900'/>
              </i>{" "}
              <a
                href="#/"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Dolor sit amet consectetur adipiscing elit?{" "}
                <i className="icon-show">
                  <BiChevronDown />
                </i>
                <i className="icon-close">
                  <BiChevronUp />
                </i>
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="icon-help">
                <HelpIcon color='#ff5900'/>
              </i>{" "}
              <a
                href="#/"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?{" "}
                <i className="icon-show">
                  <BiChevronDown />
                </i>
                <i className="icon-close">
                  <BiChevronUp />
                </i>
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <i className="icon-help">
                <HelpIcon color='#ff5900'/>
              </i>{" "}
              <a
                href="#/"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className="icon-show">
                  <BiChevronDown />
                </i>
                <i className="icon-close">
                  <BiChevronUp />
                </i>
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Faq>
  );
}