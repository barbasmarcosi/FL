import { MainContext } from "../GlobalContext";
import { AiOutlinePhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
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
import { useContext, useState } from "react";
import SlicedArrow from "../SlicedArrow";

const Contact = () => {
  const [coppied, setCoppied] = useState('2392 42-2544')
  const copyTextToClipboard = (text) => {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(text);
    } else {
      document.execCommand('copy', true, text);
    }
    setCoppied('Telefono copiado')
    setTimeout(() => {
      setCoppied('2392 42-2544')
    }, [2000])
  }
  const { openMap, setOpenMap, viewPort } = useContext(MainContext);
  return (
    <ContactContainer>
      <IframeSplitter>
        <IconContainer >
          <MapButton onClick={() => copyTextToClipboard(coppied)} type="button">
            <AiOutlinePhone style={{ filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }} />
            <IconText style={{ filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }}>{coppied}</IconText>
          </MapButton>
        </IconContainer>
        <IconContainer>
          <MapButton
            onClick={() =>
              window.open("https://www.instagram.com/farmacia.leiva/?hl=es-la")
            }
            type="button"
          >
            <BsInstagram style={{ filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }} />
            <IconText style={{ marginLeft: `${viewPort ? "1rem" : "0.5rem"}`, filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }}>
              @farmacia.leiva
            </IconText>
          </MapButton>
        </IconContainer>
        <IconContainer>
          <MdOutlinePlace style={{ filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }} />
          <IconText style={{ filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }}>Simini 978</IconText>
        </IconContainer>
        <IconContainer>
          <MapButton onClick={() => setOpenMap(!openMap)} type="button">
            <SlicedArrow
              isOpen={openMap}
              correctionClosed={viewPort ? 0.7 : 0.5}
              correctionOpen={0.3}
              scale={viewPort ? 2 : 1}
              horizontal={viewPort}
              style={{
                filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}`,
                marginTop: `${viewPort ? "1rem" : "0"}`,
              }}
            />
            <IconText
              style={{ marginLeft: `${viewPort ? "1rem" : "0.25rem"}`, filter: `${viewPort ? "drop-shadow(2px 2px black)" : "drop-shadow(1px 1px black)"}` }}
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
    </ContactContainer >
  );
};

export default Contact;
