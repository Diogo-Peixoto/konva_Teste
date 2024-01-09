import styled from "styled-components";

export const Container = styled.div``;

export const BordContainer = styled.div`
  clip-path: url(#border-comment);
  background-color: #fff;
  position: relative;
  width: 52px;
  height: 52px;
`;

export const ImageComment = styled.div`
  clip-path: url(#image-comment);
  width: 50px;
  height: 50px;
  position: absolute;
  top: 1px;
  right: 1px;

  img {
    width: 50px;
    height: 50px;

    transform: translateY(-1px) translateX(-5px);
  }
`;
