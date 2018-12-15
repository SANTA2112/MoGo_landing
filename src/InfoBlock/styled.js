import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 90px 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #fff;
  }
  &:last-child {
    ::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: #fff;
    }
  }
`;

export const Number = styled.p`
  font-size: 7.2rem;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;
