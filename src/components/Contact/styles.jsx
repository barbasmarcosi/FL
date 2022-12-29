import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background: lightgrey;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  border: 1px solid grey;
  padding: 0.25rem 0;
  box-shadow: 1px 1px 1px 0 black;
  background: transparent;
  color: white;
  @media (max-width: 528px) {
    font-size: 1.25rem;
    margin: 0.125rem;
  }
`;

export const IframeSplitter = styled.div`
  padding-top: 0.25rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: rgba(179, 179, 179, 1);
  background: transparent;
  opacity: 90%;
  width: 45vw;
  max-width: 90vw;
  border-radius: 0.25rem;
  div:last-child {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 528px) {
    width: 90vw;
    margin: 0rem;
  }
`;

export const IconText = styled.span`
  margin-left: 0.25rem;
  font-weight: light;
  text-shadow: black 2px 2px;
  @media (max-width: 528px) {
    text-shadow: black 1px 1px;
  }
`;

export const ContactContainer = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  padding-top: 0.25rem;
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 3px 0 black;
  @media (max-width: 528px) {
    flex-direction: column;
    border-radius: 0.25rem;
    margin: 0.25rem;
  }
`;

export const IframeContainer = styled.div`
  width: 45vw;
  margin: 0.25rem;
  @media (max-width: 528px) {
    width: 90vw;
    margin: 0.125rem;
  }
`;

export const MapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.25rem;
  border: none;
  margin: 0;
  color: white;
  height: 100%;
  font-weight: light;
  text-shadow: black 3px 3px;
  background: transparent;
  padding: 0.25rem;
  font-size: 2.4rem;
  overflow: hidden;
  @media (max-width: 528px) {
    font-size: 1.2rem;
    text-shadow: black 1px 1px;
  }
`;
