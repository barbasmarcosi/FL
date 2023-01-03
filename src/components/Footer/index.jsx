import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../GlobalContext";
import { FooterContainer } from "./styles";

const Footer = () => {
  const footerRef = useRef();
  const { openMap, maxHeight, setMaxHeight, viewPort } =
    useContext(MainContext);
  const [elementHeight, setElementHeight] = useState(maxHeight);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const el = document.getElementsByClassName("Footer")[0];
    setElementHeight(el.offsetTop + el.clientHeight);
    console.log(count);
    if (count === 0) {
      setMaxHeight(el.offsetTop + el.clientHeight);
    } else {
      count === 2
        ? viewPort
          ? setMaxHeight(el.offsetTop + el.clientHeight - 151)
          : setMaxHeight(el.offsetTop + el.clientHeight - 500)
        : setMaxHeight(elementHeight);
    }
    setCount((count) => count + 1);
  }, [openMap]);
  return (
    <FooterContainer ref={footerRef}>
      <li className="Footer">by Marcos Ireneo Barbas</li>
    </FooterContainer>
  );
};

export default Footer;
