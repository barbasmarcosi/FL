import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
  @media (max-width: 528px) {
  } ;
`;

export const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 528px) {
  }
`;

export const BackGroundImage = styled.img`
  object-fit: cover;
  height: 402px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;
  max-width: 100vw;
  @media (max-width: 528px) {
    object-fit: none;
    height: 402px;
  }
`;

export const ImageDivider = styled.div`
  z-index: 0;
  margin: -2rem 0;
  height: 4rem;
  width: 100vw;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  @media (max-width: 528px) {
    margin: -1rem 0;
    height: 2rem;
  }
`;
