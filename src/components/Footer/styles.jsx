import styled from "styled-components";

export const FooterContainer = styled.ul`
  @media (max-width: 528px) {
    margin: 0;
    width: 100vw;
    max-width: 100vw;
    height: 4rem;
    background-color: dodgerblue;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 0.5rem;
    list-style-type: none;
  }
`;
