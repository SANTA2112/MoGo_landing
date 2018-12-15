import React from 'react';

import { Wrap, Date, Heading, TextWrap } from './styled';

const FooterBlogItem = ({ img, heading, date }) => (
  <Wrap>
    <img src={img} alt=""/>
    <TextWrap>
      <Heading>{ heading }</Heading>
      <Date>{ date }</Date>
    </TextWrap>
  </Wrap>
)

export default FooterBlogItem
