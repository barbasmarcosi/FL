import { MainContext } from "../GlobalContext";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import {
  IconContainer,
  ContactContainer,
  IconText,
  IframeContainer,
  MapButton,
  IframeSplitter,
} from "./styles";
import PlaceIframe from "../PlaceIframe";
import { useContext, useEffect, useState } from "react";
import SlicedArrow from "../SlicedArrow";

const Contact = () => {
  const { openMap, setOpenMap, maxHeight, setMaxHeight } =
    useContext(MainContext);
  const [viewPort, setViewPort] = useState(
    window.matchMedia("(min-width: 528px)").matches
  );
  useEffect(() => {
    const handler = (e) => setViewPort(e.matches);
    window.matchMedia("(min-width: 528px)").addEventListener("change", handler);
  }, []);
  return (
    <ContactContainer>
      <IframeSplitter>
        <IconContainer>
          <AiOutlinePhone style={{ filter: "drop-shadow(2px 2px black)" }} />
          <IconText>2915249223</IconText>
        </IconContainer>
        <IconContainer>
          <AiOutlineMail style={{ filter: "drop-shadow(2px 2px black)" }} />
          <IconText>barbasmarcosi@gmail.com</IconText>
        </IconContainer>
        <IconContainer>
          <MdOutlinePlace style={{ filter: "drop-shadow(2px 2px black)" }} />
          <IconText>Wilde 122</IconText>
        </IconContainer>
        <IconContainer>
          <MapButton onClick={() => setOpenMap(!openMap)} type="button">
            {/*<BsMap style={{ filter: "drop-shadow(1px 1px black)" }} />{" "}*/}
            <SlicedArrow
              isOpen={openMap}
              correctionClosed={viewPort ? 0.7 : 0.5}
              correctionOpen={0.3}
              scale={viewPort ? 2 : 1}
              horizontal={viewPort}
              style={{
                filter: "drop-shadow(2px 2px black)",
                marginTop: `${viewPort ? "1rem" : "0"}`,
              }}
            />
            <IconText
              style={{ marginLeft: `${viewPort ? "1rem" : "0.25rem"}` }}
            >
              {openMap ? "Ocultar Mapa " : "Ver Mapa "}
            </IconText>
          </MapButton>
        </IconContainer>
      </IframeSplitter>
      <IframeContainer
        style={{
          margin: `${openMap ? (viewPort ? "0.5rem" : "0.125rem") : "0"}`,
          width: `${openMap ? (viewPort ? "45vw" : "90vw") : "0"}`,
        }}
      >
        <PlaceIframe openMap={openMap} />
      </IframeContainer>
    </ContactContainer>
  );
};

export default Contact;
