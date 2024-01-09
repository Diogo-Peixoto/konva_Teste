import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  /* bottom: 0;
  left: -40px; */
  width: 40px;

  display: flex;
  align-items: end;

  div {
    display: flex;
    flex-direction: column;
    height: 842px;
  }

  cursor: n-resize;
`;

export const Box = styled.span`
  display: flex;
  justify-content: center;
  height: 100%;
  border: 1px solid white;
  border-right: 0px;
  border-top: 0px;

  color: white;

  user-select: none;
`;

export const BoxVector = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  span {
    height: 1px;
    width: 4px;
    background-color: white;
    display: block;
  }

  .midVector {
    width: 6px;
  }
`;
