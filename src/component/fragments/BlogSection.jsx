import React from 'react';
import '../css/style.css';
import blogImg1 from '../images/blog-1.jpg';
import blogImg2 from '../images/blog-2.jpg';
import blogImg3 from '../images/blog-3.jpg';
import blogImg4 from '../images/blog-4.jpg';
import { IoArrowForward, IoCalendarClearOutline, IoFolderOpenOutline, IoPersonOutline } from 'react-icons/io5';

const BlogSection = () => {
  return (
    <section className="section blog" aria-labelledby="blog-label">
      <div className="container">

        <h2 className="h2 section-title text-center" id="blog-label">Blog & News</h2>

        <p className="section-text text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie ligula dignissim.
        </p>

        <ul className="grid-list">

          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 1024, '--height': 683 }}>
                <img src={blogImg1} width="1024" height="683" loading="lazy" alt="The Detail Process Of Decorating The Clay Vase At Pottery Studio" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">The Detail Process Of Decorating The Clay Vase At Pottery Studio</a>
                </h3>
                <div className="card-meta">
                  <a href="#" className="card-meta-wrapper">
                    <IoPersonOutline/>
                    <span className="span">admin</span>
                  </a>
                  <time className="card-meta-wrapper" dateTime="2022-10-12">
                    <IoCalendarClearOutline/>
                    <span className="span">October 12, 2022</span>
                  </time>
                  <a href="#" className="card-meta-wrapper">
                    <IoFolderOpenOutline/>
                    <span className="span">Tips & Trick</span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 1024, '--height': 683 }}>
                <img src={blogImg2} width="1024" height="683" loading="lazy" alt="Skills And Techniques To Make A Genuine Leather Wallet" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">Skills And Techniques To Make A Genuine Leather Wallet</a>
                </h3>
                <div className="card-meta">
                  <a href="#" className="card-meta-wrapper">
                    <IoPersonOutline/>
                    <span className="span">admin</span>
                  </a>
                  <time className="card-meta-wrapper" dateTime="2022-10-12">
                     <IoCalendarClearOutline/>
                    <span className="span">October 12, 2022</span>
                  </time>
                  <a href="#" className="card-meta-wrapper">
                    <IoFolderOpenOutline/>
                    <span className="span">Tips & Trick</span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 1024, '--height': 683 }}>
                <img src={blogImg3} width="1024" height="683" loading="lazy" alt="5 Latest And Trending Handmade Crafts For Adults And Kids" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">5 Latest And Trending Handmade Crafts For Adults And Kids</a>
                </h3>
                <div className="card-meta">
                  <a href="#" className="card-meta-wrapper">
                    <IoPersonOutline/>
                    <span className="span">admin</span>
                  </a>
                  <time className="card-meta-wrapper" dateTime="2022-10-12">
                    <IoCalendarClearOutline/>
                    <span className="span">October 12, 2022</span>
                  </time>
                  <a href="#" className="card-meta-wrapper">
                    <IoFolderOpenOutline/>
                    <span className="span">Tips & Trick</span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 1024, '--height': 683 }}>
                <img src={blogImg4} width="1024" height="683" loading="lazy" alt="Homemade Business That Now Makes Hundreds Of Millions" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">Homemade Business That Now Makes Hundreds Of Millions</a>
                </h3>
                <div className="card-meta">
                  <a href="#" className="card-meta-wrapper">
                    <IoPersonOutline/>
                    <span className="span">admin</span>
                  </a>
                  <time className="card-meta-wrapper" dateTime="2022-10-12">
                    <IoCalendarClearOutline/>
                    <span className="span">October 12, 2022</span>
                  </time>
                  <a href="#" className="card-meta-wrapper">
                    <IoFolderOpenOutline/>
                    <span className="span">Tips & Trick</span>
                  </a>
                </div>
              </div>
            </div>
          </li>

        </ul>

        <a href="#" className="btn">
          <span className="span">Read More</span>
          <IoArrowForward/>
        </a>

      </div>
    </section>
  );
};

export default BlogSection;
