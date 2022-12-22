import { useState } from "react";
import BurgerIcon from "../BurgerIcon";
import { HeaderContainer, Icon, Title } from "./styles";
import NavBar from "../NavBar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <HeaderContainer>
      <NavBar openModal={openMenu} />
      <BurgerIcon onClick={() => setOpenMenu(!openMenu)} open={openMenu} />
      {/*<Icon>FL</Icon>*/}
      <Title>Header</Title>
    </HeaderContainer>
  );
};

export default Header;
