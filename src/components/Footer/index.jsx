import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { MainContext } from "../GlobalContext";
import { FooterContainer } from "./styles";

const Footer = () => {
  const footerRef = useRef();
  const { openMap, setOpenMap, maxHeight, setMaxHeight } =
    useContext(MainContext);
  useEffect(() => {
    setMaxHeight(footerRef.current.parentElement.clientHeight);
    console.log(maxHeight);
  }, [openMap]);
  return (
    <FooterContainer ref={footerRef}>
      <li>by Marcos Ireneo Barbas</li>
      {/*<li>Telefono</li>
      <li>Direccion</li>*/}
    </FooterContainer>
  );
};

export default Footer;
