import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.p`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  & span {
    text-transform: uppercase;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: flex-end;
`

export const Link = styled.a`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 58px;
  position: relative;
  transition: color .3s, border-color .3s;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  padding-bottom: 6px;
  &:nth-child(5) {
    margin-right: 52px;
  }
  &:nth-child(6) {
    margin-right: 42px;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #fce38a;
    border-color: #fce38a;
  }
`;
