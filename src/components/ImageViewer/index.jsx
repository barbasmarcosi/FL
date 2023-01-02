import { useContext } from "react";
import { Image } from "./styles";
import { MainContext } from "../GlobalContext";
const ImageViewer = ({ imgIndex, src, index }) => {
  const { viewPort } = useContext(MainContext);

  return (
    <Image
      style={{
        width: `${viewPort ? `33vw` : imgIndex === index ? "100vw" : "0"}`,
      }}
      alt="a"
      src={src}
    />
  );
};

export default ImageViewer;
