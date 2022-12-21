import styled from "styled-components";

export const CarrouselContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

export const ButtonsContainer = styled.div`
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -16rem;
`;

export const Image = styled.img`
  height: 16rem;
  max-width: 100%;
  //border-image-slice: 1rem;
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
`;
