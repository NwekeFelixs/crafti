import React from 'react';
import '../css/style.css';
import aboutImg1 from '../images/about-1.jpg';
import aboutImg2 from '../images/about-2.jpg';
import aboutImg3 from '../images/about-3.jpg';
import { IoArrowForward } from 'react-icons/io5';

const AboutSection = () => {
  return (
    <section className="section about" aria-label="about">
      <div className="container">

        <div className="wrapper">
          <figure className="about-banner about-banner-1 img-holder" style={{ '--width': 600, '--height': 480 }}>
            <img
              src={aboutImg1}
              width="600"
              height="480"
              loading="lazy"
              alt="craftsman in workshop"
              className="img-cover"
            />
          </figure>

          <h2 className="h2 section-title">Make Handicrafts Since 1992</h2>
        </div>

        <figure className="about-banner about-banner-2 img-holder" style={{ '--width': 500, '--height': 700 }}>
          <img
            src={aboutImg2}
            width="500"
            height="700"
            loading="lazy"
            alt="interior view of a leather shop selling belts brac"
            className="img-cover"
          />
        </figure>

        <div className="about-content">

          <h3 className="h2 section-title">Innovative Design is Our Passion</h3>

          <p className="section-text">
            Curabitur interdum malesuada lectus ut pharetra. Sed tellus ante, aliquet a sem id, ultricies varius
            dolor. Nam volutpat hendrerit massa. Cras posuere ornare elementum.
          </p>

          <a href="#" className="btn">
            <span className="span">Read More</span>
            <IoArrowForward/>
          </a>

          <figure className="about-banner about-banner-3 img-holder" style={{ '--width': 850, '--height': 420 }}>
            <img
              src={aboutImg3}
              width="850"
              height="420"
              loading="lazy"
              alt="concentrated artisans in workshop"
              className="img-cover"
            />
          </figure>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
