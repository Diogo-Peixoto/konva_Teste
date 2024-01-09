import styled from "styled-components";

interface colorButton {
  backgroundColor: "#343A40" | "#663399" | "#FFFFFF";
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 30px;
    width: 80px;
    border: 1px solid black;
    border-radius: 5px;

    cursor: pointer;
  }
`;
