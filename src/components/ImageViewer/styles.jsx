import styled from "styled-components";

export const Image = styled.img`
  object-fit: fill;
  width: 33vw;
  max-width: 100vw;
  transition: all 2s;
  overflow: hidden;
  background: gray;
  opacity: 90%;
  @media (max-width: 528px) {
    height: 16rem;
    width: max-content;
  }
`;

export const ImageBorder = styled.div`
object-fit: fill;
  height: 0.5rem;
  width: max-content;
  background: lightgrey;
  opacity: 80%;
  @media (max-width: 528px) {
  }
`;

export const ImageViewerContainter = styled.div`
  object-fit: fill;
  display: flex;
  flex-direction: column;
  width: max-content;
  @media (max-width: 528px) {
  }
`;
