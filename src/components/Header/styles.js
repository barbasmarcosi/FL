import styled from "styled-components";

export const HeaderContainer = styled.ul`
  margin: 0;
  width: 100vw;
  height: 4rem;
  background-color: dodgerblue;
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  font-size: 2rem;
  list-style-type: none;
  padding: 0;
  box-shadow: 3px 3px 3px 0 gray;
`;

export const Icon = styled.li`
  margin: 0;
  height: 2rem;
  margin-left: 1rem;
`;

export const Title = styled.li`
  margin: 0;
  width: 70%;
  height: 2rem;
  text-align: center;
`;
