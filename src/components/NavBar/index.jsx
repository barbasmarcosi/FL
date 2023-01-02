import { Menu, Element } from "./style";

const NavBar = ({ openModal }) => {
  return (
    <>
      <Menu>
        <Element
          to="/*"
          style={{
            padding: `${openModal ? "1rem" : "0"}`,
            height: `${openModal ? "2rem" : "0"}`,
          }}
        >
          Contacto
        </Element>
        <Element
          to="/*"
          style={{
            padding: `${openModal ? "1rem" : "0"}`,
            height: `${openModal ? "2rem" : "0"}`,
          }}
        >
          Quienes somos
        </Element>
        <Element
          to="/*"
          style={{
            padding: `${openModal ? "1rem" : "0"}`,
            height: `${openModal ? "2rem" : "0"}`,
          }}
        >
          Donde encontrarnos
        </Element>
      </Menu>
    </>
  );
};

export default NavBar;
