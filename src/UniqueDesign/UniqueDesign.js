import React from 'react';

import Heading from '../Heading';

import { Wrap, ImgWrapTablet, ImgMobile, ImgWrap } from './styled';

const UniqueDesign = () => (
  <Wrap>
    <Heading text1="For all devices" text2="Unique design"/>
    <ImgWrap>
      <ImgWrapTablet>
        <img src={require('../_assets/images/display_tablet.png')} alt=""/>
        <ImgMobile src={require('../_assets/images/design_mobile.png')} alt=""/>
      </ImgWrapTablet>
    </ImgWrap>

  </Wrap>
)

export default UniqueDesign
