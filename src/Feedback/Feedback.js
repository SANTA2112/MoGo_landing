import React from 'react';

import { Desc, Name, Skill, Wrap, Img } from './styled';

const Feedback = ({ img, name, skill, desc }) => (
  <Wrap>
    <Img src={img} alt=""/>
    <div>
      <Name>{ name }</Name>
      <Skill>{ skill }</Skill>
      <Desc>{ desc }</Desc>
    </div>
  </Wrap>
)

export default Feedback
