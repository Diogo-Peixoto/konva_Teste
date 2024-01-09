import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;

  user-select: none;

  div {
    display: flex;

    max-width: 600px;
  }

  cursor: n-resize;
`;

export const Box = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  border: 1px solid white;
  border-right: 0px;
  border-top: 0px;

  color: white;

  user-select: none;
`;

export const BoxVector = styled.span`
  display: flex;
  gap: 5px;
  align-items: end;

  span {
    height: 4px;
    width: 1px;
    background-color: white;
    display: block;
  }

  .midVector {
    height: 6px;
  }
`;
