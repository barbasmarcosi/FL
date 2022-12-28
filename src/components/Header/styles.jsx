import styled from "styled-components";

export const HeaderContainer = styled.ul`
  margin: 0;
  width: 100vw;
  height: 8rem;
  //background-color: dodgerblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  font-size: 4rem;
  list-style-type: none;
  padding: 0;
  //box-shadow: 3px 3px 3px 0 gray;
  @media (max-width: 528px) {
    height: 4rem;
    font-size: 2rem;
  }
`;

export const Icon = styled.li`
  margin: 0;
  height: 8rem;
  margin-left: 2rem;
  @media (max-width: 528px) {
    height: 4rem;
    margin-left: 1rem;
  }
`;

export const Title = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.2rem;
  font-weight: bold;
  @media (max-width: 528px) {
    font-size: 1.6rem;
  }
`;

export const Logo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  font-size: 6rem;
  @media (max-width: 528px) {
    width: 4rem;
  font-size: 3rem;
  }
`;

export const Empty = styled.li`
  width: 8rem;
  @media (max-width: 528px) {
    width: 4rem;
  }
`;
