import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #a5a5a5;

  height: 120vh;

  font-size: 6px;
`;

export const PdfContainer = styled.div`
  background-color: #fff;
  width: 445.5px;
  height: 630.3px;
  position: relative;

  background: linear-gradient(180deg, #639 0%, #000 100%);
  padding: 11.91px 12.1px;

  & > div {
    background-color: #fff;
    height: 100%;
    padding: 13.64px 12.1px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 65.91px;
    height: 26.519px;
    object-fit: scale-down;
  }

  p {
    width: 196.861px;
    height: 19.064px;
  }
`;

export const Section1 = styled.div`
  h1 {
    font-size: 10px;
    margin-bottom: 9px;
  }

  p {
    font-size: 6px;
  }
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    gap: 3.5px;

    div {
      display: flex;
      flex-direction: column;
    }

    h3 {
      font-size: 8px;
    }

    p {
      font-size: 6px;
    }
  }
`;

export const Section3 = styled.div`
  h3 {
    font-size: 8px;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a5a5a5;
`;
