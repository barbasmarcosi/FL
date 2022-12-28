import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
  @media (max-width: 528px) {
    color: black;
    z-index: 3;
    padding: 0;
    position: absolute;
    top: 4.1rem;
    width: 100vw;
    height: max-content;
    font-size: 0px;
    z-index: 1;
    height: max-content;
    list-style-type: none;
    margin-left: 0;
    display: flex;
    opacity: 95%;
    flex-direction: column;
  }
`;

export const Element = styled(Link)`
  @media (max-width: 528px) {
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    padding-left: 1rem;
    margin-bottom: 3px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: gray;
    font-size: 1.5rem;
    box-shadow: 3px 3px 3px 0 black;
    border-radius: 3px;
    overflow: hidden;
    transition: all 0.5s;
    :hover {
      opacity: 90%;
    }
  }
`;
