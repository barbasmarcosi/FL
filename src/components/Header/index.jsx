import { MdOutlineLocalPharmacy } from "react-icons/md";
import { HeaderContainer, Title, Logo, Empty } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <MdOutlineLocalPharmacy />
      </Logo>
      <Title>Farmacia Leiva</Title>
      <Empty />
    </HeaderContainer>
  );
};

export default Header;
