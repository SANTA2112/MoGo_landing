import React from 'react';

import { Comments, Img, Number, Text, Date, Header, Like, Metric, Month } from './styled';

const BlogItem = ({ img, heading, text, date: { number, month } }) => (
  <div>
    <Img img={img}>
      <Date>
        <Number>{ number }</Number>
        <Month>{ month }</Month>
      </Date>
    </Img>
    <Header>{ heading }</Header>
    <Text>{ text }</Text>
    <Metric>
      <Like>{ Math.trunc(Math.random() * 1000) }</Like>
      <Comments>{ Math.trunc(Math.random() * 100) }</Comments>
    </Metric>
  </div>
)

export default BlogItem
