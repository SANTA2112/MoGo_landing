import React from 'react';

import { Wrapper } from '../App/styled';

const Slider = (props) => (
  <Wrapper>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        { props.children }
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  </Wrapper>
)

export default Slider
