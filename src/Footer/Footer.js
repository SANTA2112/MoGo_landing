import React from 'react';

import FooterBlogItem from '../FooterBlogItem';

import { Wrapper } from '../App/styled';
import { Logo } from '../HeaderMenu/styled';
import { Followers, Wrap, Link, Links, Text, Form, Button, Input, SideName, ImageWrap, LinkMore, CopyRight } from './styled';

const Footer = ({ handleSubmit, inputChange, input }) => (
  <Wrapper id="contacts">
    <Wrap>
      <div>
        <Logo style={{ color: "#ccc" }}><span>m</span>o<span>g</span>o</Logo>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
        <Followers><span>12k</span> followers</Followers>
        <Links>
          <span>Follow Us:</span>
          <Link href="#" pos="6"/>
          <Link href="#" pos="-24"/>
          <Link href="#" pos="-54"/>
          <Link href="#" pos="-84"/>
          <Link href="#" pos="-114"/>
          <Link href="#" pos="-144"/>
          <Link href="#" pos="-174"/>
          <Link href="#" pos="-204"/>
        </Links>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Email..." value={input} onChange={inputChange}/>
          <Button>Subscribe</Button>
        </Form>
      </div>
      <div>
        <SideName>blogs</SideName>
        <FooterBlogItem
          img={require('../_assets/images/footer_blog_img1.jpg')}
          heading="Lorem ipsum dolor sit amet, consectetur adipiscing"
          date="Jan 9, 2016"
        />
        <FooterBlogItem
          img={require('../_assets/images/footer_blog_img2.jpg')}
          heading="Consectetur adipiscing elit, sed do eiusmod tempor"
          date="Jan 9, 2016"
        />
        <FooterBlogItem
          img={require('../_assets/images/footer_blog_img3.jpg')}
          heading="sed do eiusmod tempor incididunt ut labore"
          date="Jan 9, 2016"
        />
      </div>
      <div>
        <SideName>instagram</SideName>
        <ImageWrap>
          <img src={require('../_assets/images/insta_img1.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img2.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img3.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img4.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img5.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img6.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img7.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img8.jpg')} alt=""/>
          <img src={require('../_assets/images/insta_img9.jpg')} alt=""/>
        </ImageWrap>
        <LinkMore href="#">View more photos</LinkMore>
      </div>
    </Wrap>
    <CopyRight>&copy; 2016 MoGo free PSD template by <span>Laaqiq</span></CopyRight>
  </Wrapper>
)

export default Footer
