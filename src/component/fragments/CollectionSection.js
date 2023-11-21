import React from 'react';
import '../css/style.css';

import collectionImg1 from '../images/collection-1.jpg';
import collectionImg2 from '../images/collection-2.jpg';
import collectionImg3 from '../images/collection-3.jpg';
import { IoArrowForward } from 'react-icons/io5';

const CollectionSection = () => {
  return (
    <section className="section collection text-center" aria-labelledby="collection-label">
      <div className="container">

        <h2 className="h2 section-title" id="collection-label">
          Unique Handicrafts Collection
        </h2>

        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie ligula dignissim.
        </p>

        <ul className="grid-list">

          <li>
            <div className="collection-card">

              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 550 }}>
                <img
                  src={collectionImg1}
                  width="500"
                  height="550"
                  loading="lazy"
                  alt="Pottery & Ceramics"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Pottery & Ceramics</h3>

                <p className="card-text">
                  Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam.
                </p>

                <a href="#" className="btn">
                  <span className="span">View Gallery</span>
                  <IoArrowForward/>
                </a>

              </div>

            </div>
          </li>

          <li>
            <div className="collection-card">

              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 550 }}>
                <img
                  src={collectionImg2}
                  width="500"
                  height="550"
                  loading="lazy"
                  alt="Leather Craft"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Leather Craft</h3>

                <p className="card-text">
                  Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam.
                </p>

                <a href="#" className="btn">
                  <span className="span">View Gallery</span>
                  <IoArrowForward/>
                </a>

              </div>

            </div>
          </li>

          <li>
            <div className="collection-card">

              <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 550 }}>
                <img
                  src={collectionImg3}
                  width="500"
                  height="550"
                  loading="lazy"
                  alt="Home Decoration"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Home Decoration</h3>

                <p className="card-text">
                  Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam.
                </p>

                <a href="#" className="btn">
                  <span className="span">View Gallery</span>
                  <IoArrowForward/>
                </a>

              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};

export default CollectionSection;
