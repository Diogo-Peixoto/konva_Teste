import styled from "styled-components";

interface ITextAreaProps {
  top: number;
  left: number;
  width: number;
  height: number;
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
  textAlign: string;
  color: string;
}

export const TextArea = styled.textarea`
  /* position: absolute;
  border: none;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: none;
  outline: none;
  resize: none;


  transform-origin: left top; */
`;
