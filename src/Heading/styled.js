import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 90px 0;
  text-align: center;
  color: #333333;
`;

export const Title = styled.h3`
  font-family: "Kaushan Script";
  font-size: 2.4rem;
  font-weight: 400;
`;

export const SubTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -42px;
    left: 0;
    right: 0;
    margin: auto;
    width: 6rem;
    height: 0.3rem;
    background-color: #f38181;
  }
`;
