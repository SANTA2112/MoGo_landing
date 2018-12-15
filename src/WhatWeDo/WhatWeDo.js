import React from 'react';

import Heading from '../Heading';
import AccordionItem from '../AccordionItem';
import Slider from '../Slider';
import SliderSlide from '../SliderSlide';

import { Wrapper } from '../App/styled';
import { Description } from '../StoryAboutUs/styled';
import { AboutOurWork, Accordion, Img, Wrap } from './styled';

const WhatWeDo = ({toggleActive, isActiveAcc}) => (
  <div id="work">
    <Wrapper>
      <Heading text1="Service" text2="What we do"/>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
      <AboutOurWork>
        <Img src={require('../_assets/images/ourwork.jpg')} alt=""/>
        <Accordion>
          <AccordionItem toggleActive={toggleActive} isActiveAcc={isActiveAcc} img={require('../_assets/images/PICTURE.png')} name="Photography" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." index={1}/>
          <AccordionItem toggleActive={toggleActive} isActiveAcc={isActiveAcc} img={require('../_assets/images/EQUALIZER.png')} name="Creativity" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." index={2}/>
          <AccordionItem toggleActive={toggleActive} isActiveAcc={isActiveAcc} img={require('../_assets/images/BULLSEYE.png')} name="Web design" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." index={3}/>
        </Accordion>
      </AboutOurWork>
    </Wrapper>
    <Wrap>
      <Slider>
        <SliderSlide img={require('../_assets/images/SPEECH_4.png')} text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”' author="Jon Doe" renderWrap={true}/>
        <SliderSlide img={require('../_assets/images/SPEECH_4.png')} text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”' author="Jon Doe" renderWrap={true}/>
      </Slider>
    </Wrap>
  </div>
)

export default WhatWeDo
