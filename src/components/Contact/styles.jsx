import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45vw;
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
    width: 90vw;
    font-size: 1.25rem;
  }
`;

export const IframeSplitter = styled.div`
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: rgba(179, 179, 179, 1);
  background: transparent;
  opacity: 90%;
  max-width: 100vw;
  border-radius: 0.25rem;
  div:last-child {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 528px) {
  }
`;

export const IconText = styled.span`
  margin-left: 0.25rem;
  font-weight: light;
  text-shadow: black 2px 2px;
  @media (max-width: 528px) {
    text-shadow: black 1px 1px
  }
`;

export const ContactContainer = styled.div`
  margin: 0.5rem;
  padding-top: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 3px 3px 3px 0 black;
  @media (max-width: 528px) {
    flex-direction: column;
  }
`;

export const IframeContainer = styled.div`
  width: 45vw;
  margin: 0.25rem;
  @media (max-width: 528px) {
    width: 90vw;
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
  @media (max-width: 528px) {
    font-size: 1.2rem;
    text-shadow: black 1px 1px;
  }
`;

export const ArrowContainer = styled.div`
  margin-left: 0.25rem;
  display: block;
  margin: 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1rem;
  overflow: hidden;
  height: 1.1rem;
  filter: drop-shadow(2px 2px black);
  @media (max-width: 528px) {
    filter: drop-shadow(1px 1px black);
    transform: scale (11.5);
  }
`;
export const Left = styled.div`
  height: 0.5rem;
  padding: 0 0.05rem;
  background: white;
  border-radius: 0.1rem;
  transform-origin: left;
  transition: all 1s;
  @media (max-width: 528px) {
  }
`;

export const Center = styled.div`
  height: 1rem;
  padding: 0 0.05rem;
  background: white;
  border-radius: 0.1rem;
  @media (max-width: 528px) {
  }
`;

export const Right = styled.div`
  height: 0.5rem;
  padding: 0 0.05rem;
  background: white;
  border-radius: 0.1rem;
  transition: all 1s;
  transform-origin: right;
  @media (max-width: 528px) {
  }
`;
