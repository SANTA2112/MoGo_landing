import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  position: relative;
  padding: 0 30px;
  :first-child {
    ::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -50px;
      width: 100%;
      height: 1px;
      background-color: #e5e5e5;
    }
  }
`;
