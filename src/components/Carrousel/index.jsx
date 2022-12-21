import { useState } from "react";
import {
  CarrouselContainer,
  Image,
  Button,
  ButtonsContainer
} from "./styles";

const Carrousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const srcs = [
    "https://council.science/wp-content/uploads/2017/04/IUPAC-feature-image-1400x600.jpg",
    "https://ramasdelaquimica.com/wp-content/uploads/2022/01/chemistry-1024x566.jpg",
    "https://plustatic.com/1378/conversions/ramas-quimica-large.jpg",
  ];

  const forward = () => {
    if (imgIndex < srcs.length - 1) {
      setImgIndex((imgIndex) => imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };

  const backward = () => {
    if (imgIndex > 0) {
      setImgIndex((imgIndex) => imgIndex - 1);
    } else {
      setImgIndex(srcs.length - 1);
    }
  };

  return (
    <>
      <CarrouselContainer>
        <Image alt="a" src={srcs[imgIndex]}></Image>
      </CarrouselContainer>
      <ButtonsContainer>
      <Button onClick={() => backward()}>{"<"}</Button>
      <Button onClick={() => forward()}>{">"}</Button>
      </ButtonsContainer>
    </>
  );
};

export default Carrousel;
