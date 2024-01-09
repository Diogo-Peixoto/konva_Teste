import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #3f3c47;
  height: 100%;
  padding: 30px;

  h3 {
    color: white;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  figure {
    height: 70px;
    width: 80px;

    display: flex;
    align-items: center;
  }

  img {
    height: 100%;
    width: 100%;

    cursor: grab;
  }
`;
