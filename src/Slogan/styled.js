import styled from 'styled-components';

export const Wrap = styled.div`
  text-align: center;
`;

export const Motto = styled.h2`
  color: #ffffff;
  font-family: "Kaushan Script";
  font-size: 7.2rem;
  font-weight: 400;
  margin-bottom: 42px;
`;

export const TeamName = styled.h1`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 15rem;
  font-weight: 700;
  line-height: 14rem;
  text-transform: uppercase;
  position: relative;
  & span {
    display: block;
  }
  ::before {
    content: '';
    position: absolute;
    bottom: -24%;
    left: 0;
    right: 0;
    margin: auto;
    width: 6rem;
    height: 0.3rem;
    background-color: #ffffff;
  }
`;

export const Link = styled.a`
  width: 16rem;
  display: inline-block;
  height: 4rem;
  border: 0.3rem solid #ffffff;
  background-color: transparent;
  text-decoration: none;
  line-height: 3.5rem;
  color: #ffffff;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 124px;
`;
