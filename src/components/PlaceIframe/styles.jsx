import styled from "styled-components";

export const PlaceIframeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 2s;
  @media (max-width: 528px) {
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  border: none;
  align-items: center;
  transition: all 1s;
  border-radius: 0.25rem;
  @media (max-width: 528px) {
  }
`;
