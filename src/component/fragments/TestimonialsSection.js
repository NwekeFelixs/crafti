import React from 'react';
import '../css/style.css';
import quote from '../images/quote.svg';

const TestimonialsSection = () => {
  return (
    <section className="section testi" aria-label="testimonials">
      <div className="container">

        <div className="testi-card">

          <p className="card-text">
            Etiam ultricies eros ut malesuada condimentum. Cras in nisl sit amet dui molestie tristique ut vitae
            libero nec laoreet purus.
          </p>

          <p className="client-name">Edward Fransisco</p>

          <p className="client-title">Founder Crafti</p>

          <img src={quote} width="50" height="50" loading="lazy" className="icon" alt="quote" />

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
