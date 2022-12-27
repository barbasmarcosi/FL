import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
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
`;

export const BackGroundImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: none;
  align-self: center;
  max-width: 100vw;
`;

export const ImageDivider = styled.div`
  z-index: 0;
  margin: -1rem 0;
  height: 2rem;
  width: 100vw;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;
