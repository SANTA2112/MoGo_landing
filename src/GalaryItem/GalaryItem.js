import React from 'react';

import { ImageWrap, Img, Cap, Desc, Name } from './styled';

const GalaryItem = ({ img, text1, text2, area }) => (
  <ImageWrap area={area}>
    <Cap>
      <img src={require('../_assets/images/PICTURE_CAP.png')} alt=""/>
      <Name>{ text1 }</Name>
      <Desc>{ text2 }</Desc>
    </Cap>
    <Img src={img} alt=""/>
  </ImageWrap>
)

export default GalaryItem
