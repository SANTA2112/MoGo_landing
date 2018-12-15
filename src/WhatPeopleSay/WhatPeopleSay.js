import React from 'react';

import Heading from '../Heading';
import Feedback from '../Feedback';

import { Wrapper } from '../App/styled';
import { Wrap, WrapBG, Feedbacks } from './styled';


const WhatPeopleSay = () => (
  <WrapBG>
    <Wrapper>
      <Wrap>
        <Heading text1="Happy Clients" text2="What people say"/>
        <Feedbacks>
          <Feedback img={require('../_assets/images/feedback_img_1.png')} name="Matthew Dix" skill="Graphic Design" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."/>
          <Feedback img={require('../_assets/images/feedback_img_2.png')} name="Nick Karvounis" skill="Graphic Design" desc="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
          <Feedback img={require('../_assets/images/feedback_img_3.png')} name="Matthew Dix" skill="Graphic Design" desc="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
          <Feedback img={require('../_assets/images/feedback_img_4.png')} name="Matthew Dix" skill="Graphic Design" desc="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."/>
        </Feedbacks>
      </Wrap>
    </Wrapper>
  </WrapBG>
)

export default WhatPeopleSay
