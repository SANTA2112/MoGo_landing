import React from 'react';

import { Wrap, HeadingText, Desc, Img } from './styled';

const ServiceCard = ({ img, heading, desc }) => (
  <Wrap>
    <Img src={img} alt=""/>
    <div>
      <HeadingText>{ heading }</HeadingText>
      <Desc>{ desc }</Desc>
    </div>
  </Wrap>
)

export default ServiceCard
