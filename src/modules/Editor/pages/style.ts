import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  /*  margin: 0 auto; */

  width: 100%;
  height: 100%;
  background-color: beige;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
`;
