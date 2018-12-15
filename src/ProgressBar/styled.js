import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
`;

export const Section = styled.div`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Montserrat - Regular";
  font-weight: 400;
  position: relative;
  & span {
    font-family: "Montserrat - Bold";
    font-size: 2.4rem;
    font-weight: 700;
  }
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    opacity: 0.5;
  }
`;
