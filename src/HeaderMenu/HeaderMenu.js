import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faSearch)

import { Wrap, Logo, Menu, Link } from './styled';

const HeaderMenu = () => (
  <Wrap>
    <Logo><span>m</span>o<span>g</span>o</Logo>
    <Menu>
      <Link href="#about">About</Link>
      <Link href="#service">Service</Link>
      <Link href="#work">Work</Link>
      <Link href="#blog">Blog</Link>
      <Link href="#contacts">Contact</Link>
      <Link href="#"><FontAwesomeIcon icon="shopping-cart"/></Link>
      <Link href="#"><FontAwesomeIcon icon="search"/></Link>
    </Menu>
  </Wrap>
)
export default HeaderMenu
