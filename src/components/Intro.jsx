import { Icon } from '@iconify/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import SocialBtns from './SocialBtns';

export default function Intro({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } =
    data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box" >
              <h6  dir="rtl" data-aos="fade-up" data-aos-duration="1200"> 
                <span>{name}</span>
              </h6>

              <h1 dir="rtl"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {heading}
              </h1>
              <h2 dir="rtl"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >  <span style={{color:'white'}}> ומכירתיות </span> <span>{typingText}</span> 
                    </h2>
              <p  dir="rtl" className="text"    style={{fontSize:"30px"}}   data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>
              <div  dir='rtl'
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                >
                  <span>{btnText}</span>{' '}
                  <i className="d-flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
                <SocialBtns
                  socialBtns={socialData}
                  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <img src={imgUrl} title alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
