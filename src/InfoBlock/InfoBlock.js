import React from 'react';

import { Wrap, Number, Text } from './styled';

const InfoBlock = ({ number, text }) => (
  <Wrap>
    <Number>{ number }</Number>
    <Text>{ text }</Text>
  </Wrap>
)

export default InfoBlock
