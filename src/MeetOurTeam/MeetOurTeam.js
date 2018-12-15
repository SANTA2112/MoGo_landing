import React from 'react';

import { Wrapper } from '../App/styled';
import Heading from '../Heading';

import { Description } from '../StoryAboutUs/styled';
import { ImageWrap } from '../StoryAboutUs/styled';
import { ImgItem, Wrap, Name, Skill, Wrap2 } from './styled';

const MeetOurTeam = () => (
  <div>
    <Wrapper>
      <Heading text1="Who we are" text2="Meet our team"/>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
      <ImageWrap>
        <Wrap>
          <ImgItem img={require('../_assets/images/man1.jpg')}/>
          <Name>Matthew Dix</Name>
          <Skill>Graphic Design</Skill>
        </Wrap>
        <Wrap>
          <ImgItem img={require('../_assets/images/man2.jpg')}/>
          <Name>Christopher Campbell</Name>
          <Skill>Branding/UX design</Skill>
        </Wrap>
        <Wrap>
          <ImgItem img={require('../_assets/images/man3.jpg')}/>
          <Name>Michael Fertig</Name>
          <Skill>Developer</Skill>
        </Wrap>
      </ImageWrap>
    </Wrapper>
    <Wrap2><img src={require('../_assets/images/Layer_25.png')} alt=""/></Wrap2>
  </div>
)

export default MeetOurTeam
