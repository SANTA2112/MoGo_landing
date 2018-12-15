import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  margin-right: 30px;
  align-self: flex-start;
`;

export const Name = styled.p`
  color: #333333;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const Skill = styled.p`
  color: #333333;
  font-family: "Roboto";
  font-style: italic;
  font-size: 1.5rem;
  line-height: 2.4rem;
  margin-bottom: 45px;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -22px;
    width: 60px;
    height: 3px;
    background-color: #f38181;
  }
`;

export const Desc = styled.blockquote`
  color: #999999;
  font-family: "Roboto";
  font-size: 1.5rem;
  line-height: 2.4rem;
`;
