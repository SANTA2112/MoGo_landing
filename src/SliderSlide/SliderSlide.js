import React from 'react';

import { ImgWrap, Desc, Author, DescWrap } from './styled';

const SliderSlide = ({ img, text, author, renderWrap }) => (
  <div className="swiper-slide">
    <ImgWrap renderWrap={renderWrap}><img src={img} alt=""/></ImgWrap>
    <DescWrap>
      <Desc>{ text }</Desc>
      <Author>{ author }</Author>
    </DescWrap>
  </div>
)

export default SliderSlide
