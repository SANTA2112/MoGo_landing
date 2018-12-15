import styled from 'styled-components';

export const Galary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "lol1 lol2 kek lol3"
    "lol4 lol5 kek lol6";
  margin-top: 100px;
`;

export const Wrap = styled.div`
  margin: 100px 0 130px;
`;
