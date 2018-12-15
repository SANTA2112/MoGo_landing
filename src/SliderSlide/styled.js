import styled, { css } from 'styled-components';

export const ImgWrap = styled.div`
  ${({ renderWrap }) => renderWrap === true && css`border: 0.3rem solid #95e1d3; padding: 45px;`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Desc = styled.blockquote`
  color: #999999;
  font-family: "Roboto";
  font-style: italic;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.6rem;
`;

export const DescWrap = styled.div`
  max-width: 76.7rem;
  margin-left: 60px;
`;

export const Author = styled.p`
  margin-top: 22px;
  position: relative;
  color: #333333;
  font-family: "Kaushan Script";
  font-size: 2.4rem;
  font-weight: 400;
  margin-left: 70px;
  ::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 3px;
    background-color: #f38181;
  }
`;

