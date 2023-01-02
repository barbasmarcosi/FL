import styled from "styled-components";

export const HeaderContainer = styled.ul`
  margin: 0;
  width: 100vw;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  font-size: 4rem;
  list-style-type: none;
  padding: 0;
  @media (max-width: 528px) {
    height: 4rem;
    font-size: 2rem;
  }
`;

export const Title = styled.li`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  text-shadow: green 3px 3px;
  font-weight: bold;
  @media (max-width: 528px) {
    font-size: 2.25rem;
    text-shadow: green 1px 1px;
  }
`;

export const Logo = styled.li`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  font-size: 6rem;
  filter: drop-shadow(3px 3px green);
  @media (max-width: 528px) {
    width: 3rem;
    font-size: 3rem;
    filter: drop-shadow(1px 1px green);
  }
`;

export const Empty = styled.li`
  width: 8rem;
  @media (max-width: 528px) {
    width: 3rem;
  }
`;
