import styled from 'styled-components';

export const Description = styled.p`
  color: #999999;
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.4rem;
  text-align: center;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0 110px;
`;

export const Image = styled.div`
  background: url(${({ img = "" }) => img}) no-repeat center center/contain;
  width: 38rem;
  height: 25rem;
  position: relative;
  transition: transform .4s, box-shadow .2s;
  box-shadow: 0 0 5px #95e1d3;
  :hover {
    background: linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%), url(${({ img = "" }) => img}) no-repeat center center/contain;
    transform: translate(-10px, -10px);
    box-shadow: 10px 10px 5px #95e1d3;
  }
`;

export const Statistics = styled.div`
  background-color: #95e1d3;
  color: #ffffff;
`;

export const InfoBlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
