import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #2d2b33;
  padding-block: 30px;

  max-height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2d2b33;
    border-radius: 18px;
    border: 2px solid white;
  }
`;

export const GuideZone = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  width: 640px;
`;

export const GuidelineH = styled.div`
  position: absolute;
  background-color: red;
  pointer-events: none;
  width: 100%;
  height: 1px;
`;

export const GuidelineV = styled.div`
  position: absolute;
  background-color: red;
  pointer-events: none;
  width: 1px;
  height: 105%;

  cursor: ne-resize;
`;
