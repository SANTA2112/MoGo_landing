import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 10px;
  width: 600px;
  overflow: hidden;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid #e5e5e5;
  position: relative;
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 20px 15px 16px;
  outline: none;
  transition: transform .4s;
  cursor: pointer;
  z-index: 2;
  & span {
    color: #333333;
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-left: 15px;
  }
  ::after {
    content: '';
    transform: rotate(180deg);
    ${({ toggle }) => toggle && css`
      transform: rotate(0);
    `}
    width: 22px;
    height: 12px;
    background: url(${require('../_assets/images/ARROW_/_DOWN.png')});
  }
`;

export const Description = styled.textarea`
  resize: none;
  color: #999999;
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.4rem;
  border: none;
  background-color: #fff;
  outline: none;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-right: 25px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background: #95e1d3;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #95e1d3;
  }
`;

export const DescriptionWrap = styled.div`
  height: 0;
  padding: 0;
  transition: height .4s, padding .4s;
  ${({ toggle }) => toggle && css`
    padding: 20px 22px 28px 20px;
    height: 170px;
  `}
`;
