import { useState } from "react";
import BurgerIcon from "../BurgerIcon";
import { AiOutlineExperiment } from "react-icons/ai";
import { HeaderContainer, Icon, Title, Logo, Empty } from "./styles";
import NavBar from "../NavBar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <HeaderContainer>
      {/*<NavBar openModal={openMenu} />*/}
      <Logo>
        <AiOutlineExperiment />
      </Logo>
      {/*<BurgerIcon onClick={() => setOpenMenu(!openMenu)} open={openMenu} />*/}
      {/*<Icon>FL</Icon>*/}
      <Title>Nombre de lo que sea</Title>
      <Empty />
    </HeaderContainer>
  );
};

export default Header;
