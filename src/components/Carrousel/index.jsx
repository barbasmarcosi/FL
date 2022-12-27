import { useEffect, useState } from "react";
import { CarrouselContainer, Button, ButtonsContainer } from "./styles";
import ImageViewer from "../ImageViewer";

const Carrousel = () => {
  const srcs = [
    "https://council.science/wp-content/uploads/2017/04/IUPAC-feature-image-1400x600.jpg",
    "https://ramasdelaquimica.com/wp-content/uploads/2022/01/chemistry-1024x566.jpg",
    "https://plustatic.com/1378/conversions/ramas-quimica-large.jpg",
  ];
  const [imgIndex, setImgIndex] = useState(0);
  const forward = () =>
    setImgIndex(
      imgIndex < srcs.length - 1
        ? (imgIndex) => imgIndex + 1
        : (imgIndex) => imgIndex - srcs.length + 1
    );

  const backward = () => {
    if (imgIndex > 0) {
      setImgIndex((imgIndex) => imgIndex - 1);
    } else {
      setImgIndex(srcs.length - 1);
    }
  };

  useEffect(() => {
    setTimeout(
      () =>
        setImgIndex(
          imgIndex < srcs.length - 1
            ? (imgIndex) => imgIndex + 1
            : (imgIndex) => imgIndex - srcs.length + 1
        ),
      5000
    );
  }, [imgIndex]);

  return (
    <CarrouselContainer>
      {srcs.map((src) => (
        <ImageViewer
          key={srcs.indexOf(src)}
          src={src}
          index={srcs.indexOf(src)}
          imgIndex={imgIndex}
        />
      ))}
    </CarrouselContainer>
  );
};

export default Carrousel;
