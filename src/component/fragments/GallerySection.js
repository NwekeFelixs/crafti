import React from 'react';
import galleryImage1 from '../images/gallery-1.jpg';
import galleryImage2 from '../images/gallery-2.jpg';
import galleryImage3 from '../images/gallery-3.jpg';
import galleryImage4 from '../images/gallery-4.jpg';
import { IoArrowForward } from 'react-icons/io5';

const GallerySection = () => {
  return (
    <section className="gallery">

      <ul className="gallery-list">

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: `url(${galleryImage1})` }}>
            <div className="card-content">

              <h3 className="h3 card-title">Vases & Plant Pots</h3>

              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <IoArrowForward/>
              </a>

            </div>
          </div>
        </li>

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: `url(${galleryImage2})` }}>
            <div className="card-content">

              <h3 className="h3 card-title">Clay Craft</h3>

              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <IoArrowForward/>
              </a>

            </div>
          </div>
        </li>

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: `url(${galleryImage3})` }}>
            <div className="card-content">

              <h3 className="h3 card-title">Sculpturing</h3>

              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <IoArrowForward/>
              </a>

            </div>
          </div>
        </li>

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: `url(${galleryImage4})` }}>
            <div className="card-content">

              <h3 className="h3 card-title">Accessories</h3>

              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <IoArrowForward/>
              </a>

            </div>
          </div>
        </li>

      </ul>

    </section>
  );
};

export default GallerySection;
