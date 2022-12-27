import styled from "styled-components";

export const Image = styled.img`
  height: 16rem;
  width: 100vw;
  max-width: 100vw;
  transition: all 2s;
  overflow: hidden;
  background: gray;
  opacity: 90%;
`;

export const ImageBorder = styled.div`
  height: 0.5rem;
  width: 100vw;
  background: lightgrey;
  opacity: 80%;
`;

export const ImageViewerContainter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
