import { Image } from "./styles";

const ImageViewer = ({ imgIndex, src, index }) => {
  return (
    <Image
      style={{ width: `${imgIndex === index ? "100%" : "0"}` }}
      alt="a"
      src={src}
    />
  );
};

export default ImageViewer;
