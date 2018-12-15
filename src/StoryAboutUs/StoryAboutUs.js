import React from 'react';

import Heading from '../Heading';
import InfoBlock from '../InfoBlock';

import { Wrapper } from '../App/styled';
import { Description, ImageWrap, Image, Statistics, InfoBlockWrap } from './styled';

const StoryAboutUs = () => (
  <div>
    <Wrapper id="about">
      <Heading text1="What we do" text2="Story about us"/>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
      <ImageWrap>
        <Image img={require('../_assets/images/photo1.jpg')}/>
        <Image img={require('../_assets/images/photo2.jpg')}/>
        <Image img={require('../_assets/images/photo3.jpg')}/>
      </ImageWrap>
    </Wrapper>
    <Statistics>
      <Wrapper>
        <InfoBlockWrap>
          <InfoBlock number="42" text="Web Design Projects"/>
          <InfoBlock number="123" text="Happy client"/>
          <InfoBlock number="15" text="Award winner"/>
          <InfoBlock number="99" text="Cup of coffee"/>
          <InfoBlock number="24" text="Members"/>
        </InfoBlockWrap>
      </Wrapper>
    </Statistics>
  </div>
)

export default StoryAboutUs
