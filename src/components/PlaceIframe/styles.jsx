import styled from "styled-components";

export const PlaceIframeContainer = styled.div`
  @media (max-width: 528px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 2s;
  }
`;

export const Iframe = styled.iframe`
  @media (max-width: 528px) {
    width: 100%;
    border: none;
    align-items: center;
    transition: all 1s;
    border-radius: 0.25rem;
  }
`;
