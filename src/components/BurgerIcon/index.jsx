import { Burger, Lines } from "./style";

const BurgerIcon = ({ open, onClick }) => {
  return (
    <Burger onClick={onClick}>
      <Lines style={{ transform: `rotate(${open ? 45 : 0}deg)` }}></Lines>
      <Lines style={{ opacity: `${open ? "0" : "inherit"}` }}></Lines>
      <Lines style={{ transform: `rotate(${open ? -45 : 0}deg)` }}></Lines>
    </Burger>
  );
};

export default BurgerIcon;
