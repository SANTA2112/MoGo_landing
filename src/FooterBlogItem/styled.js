import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h5`
  color: #333333;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const Date = styled.p`
  color: #999999;
  font-family: "Roboto";
  font-style: italic;
  font-size: 1.3rem;
`;

export const TextWrap = styled.div`
  margin-left: 20px;
`;
