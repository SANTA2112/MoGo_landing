import React from 'react';

import Heading from '../Heading';
import BlogItem from '../BlogItem';

import { Wrapper } from '../App/styled';
import { BlogWrap } from './styled';


const LatestBlog = () => (
  <Wrapper id="blog">
    <Heading text1="Our stories" text2="Latest blog"/>
    <BlogWrap>
      <BlogItem
        img={require('../_assets/images/blog_img1.jpg')}
        heading="Lorem ipsum dolor sit amet"
        text="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date={{ number: 15, month: "Jan" }}
      />
      <BlogItem
        img={require('../_assets/images/blog_img2.jpg')}
        heading="Sed do eiusmod tempor"
        text="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date={{ number: 14, month: "Jan" }}
      />
      <BlogItem
        img={require('../_assets/images/blog_img3.jpg')}
        heading="incididunt ut labore et dolore"
        text="Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date={{ number: 12, month: "Jan" }}
      />
    </BlogWrap>
  </Wrapper>
)

export default LatestBlog
