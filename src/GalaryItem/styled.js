import styled, { css } from 'styled-components';

export const Cap = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  background-image: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%);
`;

export const ImageWrap = styled.div`
  position: relative;
  grid-area: ${({ area }) => area};
  transition: opacity .3s;
  :hover {
    ${Cap} {
      opacity: 1;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Name = styled.p`
  text-transform: uppercase;
  margin-top: 20px;
`;

export const Desc = styled.p`
  font-family: "Roboto";
  font-size: 1.5rem;
  margin-top: 16px;
`;
