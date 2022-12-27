import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  background: lightgrey;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  border: 1px solid grey;
  padding: 0.25rem 0;
  box-shadow: 1px 1px 1px 0 black;
`;

export const IconText = styled.span`
  margin-left: 0.25rem;
`;

export const ContactContainer = styled.div`
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  background: rgba(179, 179, 179, 1);
  opacity: 90%;
  max-width: 100vw;
  box-shadow: 3px 3px 3px 0 black;
  border-radius: 0.25rem;
`;

export const IframeContainer = styled.div`
  width: 90vw;
  margin: 0.25rem;
`;

export const MapButton = styled.input`
  border-radius: 0.25rem;
  border: 1px solid grey;
  margin: 0.125rem 0.25rem;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(179, 179, 179, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 0.25rem;
  box-shadow: 1px 1px 1px 0 black;
  font-size: 1rem;
`;
