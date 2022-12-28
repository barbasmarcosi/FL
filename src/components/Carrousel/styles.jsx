import styled from "styled-components";

export const CarrouselContainer = styled.div`
  height: 402px;
  width: max-content;
  max-width: 100vw;
  display: flex;
  overflow: hidden;
  @media (max-width: 528px) {
    height: unset;
    width: 100%;
    max-width: 100vw;
  }
`;

export const ButtonsContainer = styled.div`
  height: 16rem;
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  margin-top: -16rem;
  @media (max-width: 528px) {
  }
`;

export const Button = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8.75rem;
  font-size: 1.5rem;
  padding: 5%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
  :hover {
    opacity: 50%;
    transform: scale(0.7);
    color: blue;
  }
  @media (max-width: 528px) {
  }
`;
