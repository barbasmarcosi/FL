import { ArrowContainer, Center, Left, Right } from "./styles";

const SlicedArrow = ({
  isOpen,
  scale = "1",
  correctionOpen = "0",
  correctionClosed = "0",
  style,
  horizontal
}) => {
  return (
    <div
      style={{
        paddingLeft: `${
          isOpen ? `${correctionClosed}rem` : `${correctionOpen}rem`
        }`,
        transform: `scale(${scale}) rotate(${horizontal ? 270 : 0 }deg)`, 
        ...style,
        
      }}
    >
      <ArrowContainer>
        <Left
          style={{
            rotate: `${isOpen ? "45deg " : "-45deg "}`,
            marginBottom: `${isOpen ? "0.75rem " : "0"}`,
            marginTop: `${isOpen ? "0 " : "0.75rem"}`,
          }}
        />

        <Center />
        <Right
          style={{
            rotate: `${isOpen ? "-45deg " : "45deg "}`,
            marginBottom: `${isOpen ? "0.75rem " : "0"}`,
            marginTop: `${isOpen ? "0 " : "0.75rem"}`,
          }}
        />
      </ArrowContainer>
    </div>
  );
};

export default SlicedArrow;
