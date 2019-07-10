import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section class="carousel">
    <div class="carousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;