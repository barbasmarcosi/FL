import styled from "styled-components";

export const Burger = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  height: 2rem;
  width: 2rem;
  gap: 0.65rem;
  :hover {
    cursor: pointer;
  }
`;

export const Lines = styled.div`
  background: black;
  height: 2px;
  width: 100%;
  transform-origin: left;
  transition: all 0.5s;
  border-radius: 2px;
`;
