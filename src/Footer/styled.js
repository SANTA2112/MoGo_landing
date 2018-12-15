import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 74px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 50px;
`;

export const Text = styled.p`
  color: #999999;
  font-family: "Roboto";
  font-size: 1.5rem;
  line-height: 2.4rem;
  margin-top: 22px;
`;

export const Followers = styled.p`
  color: #333333;
  font-size: 1.4rem;
  margin-top: 26px;
  & span {
    font-family: "Montserrat";
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-top: 38px;
  position: relative;
  & span {
    color: #999999;
    font-family: "Roboto";
    font-style: italic;
    font-size: 1.5rem;
  }
  ::before {
    content: '';
    position: absolute;
    top: -18px;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #e5e5e5;
  }
`;

export const Link = styled.a`
  background: url(${require('../_assets/images/links_icons.png')});
  height: 18px;
  width: 20px;
  margin-left: 14px;
  background-repeat: no-repeat;
  background-position-x: ${({ pos }) => pos}px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 28px;
`

export const Input = styled.input`
  color: #cccccc;
  font-family: "Roboto";
  font-style: italic;
  font-size: 1.5rem;
  padding: 14px;
  border: none;
  width: 230px;
  border: 0.1rem solid #e7e7e7;
`;

export const Button = styled.button`
  color: #ffffff;
  font-size: 1.4rem;
  padding: 15px 34px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #95e1d3;
  border: none;
`;

export const SideName = styled.p`
  color: #333333;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
`;

export const LinkMore = styled.a`
  text-decoration: none;
  color: #333333;
  font-family: "Roboto";
  font-style: italic;
  font-size: 1.3rem;
  margin-top: 20px;
  display: block;
`;

export const CopyRight = styled.p`
  color: #333333;
  font-size: 1.4rem;
  text-align: center;
  position: relative;
  margin-top: 95px;
  margin-bottom: 22px;
  & span {
    color: #f38181;
  }
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: -24px;
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
  }
`;
