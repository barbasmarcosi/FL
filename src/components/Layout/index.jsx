import { MainContext } from "../GlobalContext";
import { useContext, useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import {
  LayoutContainer,
  BackGroundContainer,
  BackGroundImage,
  ImageDivider,
} from "./styles";

const Layout = ({ children }) => {
  const { maxHeight } = useContext(MainContext);
  const footerRef = useRef();
  useEffect(() => {}, [maxHeight]);
  return (
    <LayoutContainer>
      <BackGroundContainer style={{ height: maxHeight }}>
        <BackGroundImage
          alt="back"
          src="https://c0.wallpaperflare.com/preview/985/736/853/backgrounds-school-education-science.jpg"
          height={"402px"}
        />
        <ImageDivider />
        <BackGroundImage
          alt="back"
          src="https://c4.wallpaperflare.com/wallpaper/217/606/469/chemistry-science-wallpaper-preview.jpg"
          height={"402px"}
        />
        <ImageDivider />
        <BackGroundImage
          alt="back"
          src="https://c4.wallpaperflare.com/wallpaper/22/728/16/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview.jpg"
          height={"402px"}
        />
        <ImageDivider />
        <BackGroundImage
          alt="back"
          src="https://c4.wallpaperflare.com/wallpaper/209/848/50/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview.jpg"
          height={"402px"}
        />
      </BackGroundContainer>
      <Header />
      {children}
      <Footer footerRef={footerRef} />
    </LayoutContainer>
  );
};
export default Layout;
