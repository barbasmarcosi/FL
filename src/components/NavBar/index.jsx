import { useState } from "react";
import { Menu, Element } from "./style";

const NavBar = ({ openModal = false }) => {
  return (
    <>
      <Menu style={{ display: `${openModal ? "inherit" : "none"}` }}>
        <Element>Contacto</Element>
        <Element>Quienes somos</Element>
        <Element>Donde encontrarnos</Element>
      </Menu>
    </>
  );
};

export default NavBar;
