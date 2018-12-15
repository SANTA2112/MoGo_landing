import styled from 'styled-components';

export const Img = styled.div`
  width: 380px;
  height: 240px;
  background: url(${({ img }) => img}) center center/cover;
  position: relative;
`;

export const Date = styled.div`
  background-color: #95e1d3;
  position: absolute;
  bottom: 10px;
  left: -10px;
  padding: 15px;
  text-align: center;
  color: #fff;
`;

export const Number = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Month = styled.p`
  font-family: "Roboto";
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
`;

export const Header = styled.h4`
  color: #333333;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-top: 20px;
`;

export const Text = styled.p`
  color: #999999;
  font-family: "Roboto";
  font-size: 1.5rem;
  line-height: 2.4rem;
`;

export const Metric = styled.div`
  margin-top: 40px;
  display: flex;
  font-style: italic;
  margin-left: 25px;
`;

export const Like = styled.p`
  color: #999999;
  font-family: "Roboto";
  font-size: 1.5rem;
  line-height: 2.4rem;
  margin-right: 40px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -25px;
    transform: translateY(50%);
    width: 20px;
    height: 12px;
    background: url(${require('../_assets/images/VIEW_blog.png')});
  }
`;

export const Comments = styled(Like)`
  margin-right: 0;
  ::before {
    content: '';
    transform: translateY(30%);
    width: 17px;
    height: 15px;
    background: url(${require('../_assets/images/COMMENTS_blog.png')});
  }
`;
