import React from 'react';

import Heading from '../Heading';
import GalaryItem from '../GalaryItem';
import Slider from '../Slider';
import SliderSlide from '../SliderSlide';

import { Wrapper } from '../App/styled';
import { Description } from '../StoryAboutUs/styled';
import { Galary, Wrap } from './styled';

const SomeOfOurWork = () => (
  <div>
    <Wrapper>
      <Heading text1="What we do" text2="Some of our work"/>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
    </Wrapper>
    <Galary>
      <GalaryItem img={require('../_assets/images/galary_img1.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='lol1' />
      <GalaryItem img={require('../_assets/images/galary_img2.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='lol2' />
      <GalaryItem img={require('../_assets/images/galary_img3.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='kek' />
      <GalaryItem img={require('../_assets/images/galary_img4.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='lol3' />
      <GalaryItem img={require('../_assets/images/galary_img5.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='lol4' />
      <GalaryItem img={require('../_assets/images/galary_img6.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='lol5' />
      <GalaryItem img={require('../_assets/images/galary_img7.jpg')} text1="Creatively designed" text2="Lorem ipsum dolor sit" area='lol6' />
    </Galary>
    <Wrap>
      <Slider>
        <SliderSlide img={require('../_assets/images/slider_img1.png')} text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”' author="Jon Doe" renderWrap={false} />
        <SliderSlide img={require('../_assets/images/slider_img1.png')} text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”' author="Jon Doe" renderWrap={false} />
      </Slider>
    </Wrap>
  </div>
)

export default SomeOfOurWork
