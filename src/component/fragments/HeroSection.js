import React from 'react';
import '../css/style.css';
import heroImg from '../images/hero-banner-1.jpg';
import heroImg2 from '../images/hero-banner-2.jpg';
import heroShape from '../images/hero-shape.png';
import { IoArrowForward } from 'react-icons/io5';

const HeroSection = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">

        <div className="hero-content">

          <h1 className="h1 hero-title">
            We Make Top Quality
            <span className="span">Handmade Products</span>
          </h1>

          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>

          <a href="#" className="btn">
            <span className="span">View Collection</span>
            <IoArrowForward/>
          </a>

        </div>

        <div className="wrapper">
          <div className="hero-banner-1 img-holder" style={{ '--width': 400, '--height': 550 }}>
            <img
              src={heroImg}
              width="400"
              height="550"
              alt="view of assortment of decor for interior shop"
              className="img-cover"
            />
          </div>

          <div className="hero-banner-2 img-holder" style={{ '--width': 500, '--height': 850 }}>
            <img
              src={heroImg2}
              width="500"
              height="850"
              alt="ceramic craft ware"
              className="img-cover"
            />
          </div>

          <img src={heroShape} width="570" height="676" alt="leaves" className="shape" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
