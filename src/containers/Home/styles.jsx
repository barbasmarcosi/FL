import styled from "styled-components";

export const Logo = styled.div`
  font-size: 10rem;
  @media (max-width: 528px) {
    font-size: 5rem;
  }
`;

export const About = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgrey;
  text-align: center;
  margin: 2rem;
  padding: 1rem;
  align-self: center;
  max-width: 100vw;
  opacity: 90%;
  border-radius: 0.5rem;
  text-shadow: white 1px 1px;
  font-size: 2rem;
  @media (max-width: 528px) {
    margin: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    width: 90vw
  }
`;
