import styled from 'styled-components';

export const ImgItem = styled.div`
  width: 38rem;
  height: 47rem;
  background: url(${({ img = "" }) => img}) no-repeat center center/contain;
  position: relative;
  transition: transform .4s, box-shadow .2s;
  box-shadow: 0 0 5px #95e1d3;
  :hover {
    background: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%), url(${({ img = "" }) => img}) no-repeat center center/contain;
    transform: translate(-10px, -10px);
    box-shadow: 10px 10px 5px #95e1d3;
  }
`;

export const Wrap = styled.div`
  text-align: center;
`;

export const Wrap2 = styled.div`
  padding: 50px 0;
  background-color: #f6f6f6;
  text-align: center;
`;

export const Name = styled.p`
  color: #333333;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 30px;
`;

export const Skill = styled.p`
  color: #999999;
  font-family: "Roboto";
  font-style: italic;
  font-size: 1.5rem;
  line-height: 2.4rem;
`;
