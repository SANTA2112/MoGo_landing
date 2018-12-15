import styled from 'styled-components';

export const HeaderWrap = styled.header`
  height: 100vh;
  background: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%), url(${require('../_assets/images/header_img.jpg')}) center center/cover;
`;

export const Wrap = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding: 28px 0;
  max-width: 1200px;
  margin: auto;
`;
