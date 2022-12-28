import { useEffect, useState } from "react";
import { Image } from "./styles";

const ImageViewer = ({ imgIndex, src, index, srcsLength }) => {
  const [viewPort, setViewPort] = useState(
    window.matchMedia("(min-width: 528px)").matches
  );
  useEffect(() => {
    const handler = (e) => setViewPort(e.matches);
    window.matchMedia("(min-width: 528px)").addEventListener("change", handler);
  }, []);
  console.log(viewPort);
  return (
    <Image
      style={{
        width: `${
          viewPort
            ? `33vw`
            : imgIndex === index
            ? "100%"
            : "0"
        }`,
        //width: `${imgIndex === index ? (viewPort ? "33vw" : "100%") : "0"}`,
      }}
      alt="a"
      src={src}
    />
  );
};

export default ImageViewer;
