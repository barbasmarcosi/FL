import styled from "styled-components";

export const Menu = styled.ul`
  color: black;
  z-index: 3;
  padding: 0;
  position: absolute;
  top: 4.1rem;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background: lightgrey;
  list-style-type: none;
  margin-left: 0;
  display: flex;
  opacity: 95%;
  flex-direction: column;
  box-shadow: 3px 3px 3px 0 black;
`;

export const Element = styled.li`
  padding-left: 1rem;
  margin-bottom: 3px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: gray;
  font-size: 1.5rem;
  box-shadow: 3px 3px 3px 0 black;
  border-radius: 3px;
  :hover {
    opacity: 90%;
  }
`;
