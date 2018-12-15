import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 0 80px;
  background: linear-gradient(to top,rgba(255,255,255,0.85) 0%,rgba(255,255,255,0.85) 100%), url(${require('../_assets/images/map.jpg')}) center center/cover;
`;

export const Text = styled.p`
  color: #f38181;
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: -38px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${require('../_assets/images/map_pin.png')}) center center/cover;
    width: 2rem;
    height: 2.6rem;
  }
  ::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #f38181;
  }
`;
