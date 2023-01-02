import styled from "styled-components";

export const FooterContainer = styled.ul`
  text-align: center;
  margin: 0;
  margin-top: 0.25rem;
  width: 100vw;
  max-width: 100vw;
  height: 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: dodgerblue;
  padding: 0;

  list-style-type: none;
  @media (max-width: 528px) {
    height: 0.75rem;
    font-size: 0.5rem;
  }
`;
