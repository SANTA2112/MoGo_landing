import React from 'react';

import { Wrap, Title, SubTitle } from './styled';

const Heading = ({ text1, text2 }) => (
  <Wrap>
    <Title>{text1}</Title>
    <SubTitle>{text2}</SubTitle>
  </Wrap>
)

export default Heading
