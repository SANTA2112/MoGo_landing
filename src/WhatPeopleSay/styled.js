import styled from 'styled-components';

export const WrapBG = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top,rgba(255,255,255,0.85) 0%,rgba(255,255,255,0.85) 100%), url(${require('../_assets/images/bg_img.jpg')}) center center/cover;
`;

export const Wrap = styled.div`
  padding: 0 40px;
`;

export const Feedbacks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 86px;
  grid-row-gap: 80px;
  margin-bottom: 130px;
  margin-top: 144px;
`;
