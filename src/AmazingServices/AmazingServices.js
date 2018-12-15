import React from 'react';

import Heading from '../Heading';
import ServiceCard from '../ServiceCard';

import { Wrapper } from '../App/styled';
import { CardWrap } from './styled';

const AmazingServices = () => (
  <Wrapper id="service">
    <Heading text1="We work with" text2="Amazing Services"/>
    <div>
      <CardWrap>
        <ServiceCard img={require('../_assets/images/clock.png')} heading="Photography" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
        <ServiceCard img={require('../_assets/images/LINE_GRAPH.png')} heading="Web Design" desc="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
        <ServiceCard img={require('../_assets/images/COMPUTER.png')} heading="Creativity" desc="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
      </CardWrap>
      <CardWrap>
        <ServiceCard img={require('../_assets/images/BOOK_2.png')} heading="seo" desc="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
        <ServiceCard img={require('../_assets/images/HOME.png')} heading="Css/Html" desc="Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor." />
        <ServiceCard img={require('../_assets/images/border_img.png')} heading="digital" desc="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
      </CardWrap>
    </div>
  </Wrapper>
)

export default AmazingServices
