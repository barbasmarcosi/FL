import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import {
  IconContainer,
  ContactContainer,
  IconText,
  IframeContainer,
  MapButton,
  ArrowContainer,
  Left,
  Center,
  Right,
  IframeSplitter
} from "./styles";
import PlaceIframe from "../PlaceIframe";
import { useState } from "react";

const Contact = () => {
  const [openMap, setOpenMap] = useState(true);
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
            <ArrowContainer
              style={{
                paddingLeft: `${openMap ? "0.3rem" : "0.1rem"}`,
              }}
            >
              <Left
                style={{
                  rotate: `${openMap ? "45deg " : "-45deg "}`,
                  marginBottom: `${openMap ? "0.75rem " : "0"}`,
                  marginTop: `${openMap ? "0 " : "0.75rem"}`,
                }}
              />

              <Center />
              <Right
                style={{
                  rotate: `${openMap ? "-45deg " : "45deg "}`,
                  marginBottom: `${openMap ? "0.75rem " : "0"}`,
                  marginTop: `${openMap ? "0 " : "0.75rem"}`,
                }}
              />
            </ArrowContainer>
            <IconText>{openMap ? "Ocultar Mapa " : "Ver Mapa "}</IconText>
          </MapButton>
        </IconContainer>
      </IframeSplitter>
      <IframeContainer>
        <PlaceIframe openMap={openMap} />
      </IframeContainer>
    </ContactContainer>
  );
};

export default Contact;
