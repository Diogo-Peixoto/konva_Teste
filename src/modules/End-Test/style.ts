import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Section1 = styled.div`
  height: 100vh;
  width: 39vw;
  min-width: 400px;
  background: linear-gradient(180deg, #663399 0%, #000000 127.22%);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: relative;

  .backgroud {
    position: absolute;
    bottom: 0;
    z-index: 1;

    width: 100%;
    height: 93%;
  }

  .image2 {
    width: 334px;
    height: 334px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Section2 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 58%;
    max-width: 672px;
    min-width: 480px;
    padding-inline: 1rem;
  }

  h1 {
    font-family: "PT Sans", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 35.22px;
    color: #663399;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    width: 100%;
    height: 58px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 1300px) {
  }
`;
