import React from 'react';

import { Button, Description, Wrap, DescriptionWrap } from './styled';

const AccordionItem = ({img, name, desc, index, toggleActive, isActiveAcc}) => {
  return (
    <Wrap>
      <Button onClick={() => toggleActive(index)} toggle={isActiveAcc === index} ><img src={img} alt=""/> <span>{name}</span></Button>
      <DescriptionWrap toggle={isActiveAcc === index}>
        <Description value={desc} disabled />
      </DescriptionWrap>
    </Wrap>
  )
}


export default AccordionItem
