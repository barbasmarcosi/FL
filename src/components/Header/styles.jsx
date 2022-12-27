import styled from "styled-components";

export const HeaderContainer = styled.ul`
  margin: 0;
  width: 100vw;
  height: 4rem;
  //background-color: dodgerblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  font-size: 2rem;
  list-style-type: none;
  padding: 0;
  //box-shadow: 3px 3px 3px 0 gray;
`;

export const Icon = styled.li`
  margin: 0;
  height: 4rem;
  margin-left: 1rem;
`;

export const Title = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const Logo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  font-size: 3rem;
`;

export const Empty = styled.li`
  width: 2.5rem;
`;
