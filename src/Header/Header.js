import React from 'react';

import HeaderMenu from '../HeaderMenu';
import Slogan from '../Slogan';
import ProgressBar from '../ProgressBar'

import { HeaderWrap, Wrap } from './styled';

const Header = () => (
  <HeaderWrap>
    <Wrap>
      <HeaderMenu />
      <Slogan />
      <ProgressBar />
    </Wrap>
  </HeaderWrap>
)
export default Header
