import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top,rgba(255,255,255,0.85) 0%,rgba(255,255,255,0.85) 100%), url(${require('../_assets/images/designBG.jpg')}) center center/cover;
`;

export const ImgWrapTablet = styled.div`
  max-width: 47.7rem;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImgMobile = styled.img`
  max-width: 27.4rem;
  position: absolute;
  right: -34%;
  bottom: -16%;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;
