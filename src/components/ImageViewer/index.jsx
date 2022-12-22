import { Image } from "./styles";

const ImageViewer = ({ imgIndex, src, index }) => {
  return <Image style={{transform: `translate(${imgIndex*-100}vw)`}} alt="a" src={src}></Image>;
};

export default ImageViewer;
