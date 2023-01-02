import styled from "styled-components";

export const ArrowContainer = styled.div`
  cursor: pointer;
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
  @media (max-width: 528px) {
    transform: scale (11.5);
  }
`;
export const Left = styled.div`
  height: 0.442rem;
  padding: 0 0.05rem;
  background: white;
  border-radius: 0.1rem;
  transform-origin: left;
  transition: all 1s;
  @media (max-width: 528px) {
  }
`;

export const Center = styled.div`
  height: 0.82rem;
  padding: 0 0.05rem;
  background: white;
  border-radius: 0.1rem;
  @media (max-width: 528px) {
  }
`;

export const Right = styled.div`
  height: 0.442rem;
  padding: 0 0.05rem;
  background: white;
  border-radius: 0.1rem;
  transition: all 1s;
  transform-origin: right;
  @media (max-width: 528px) {
  }
`;
