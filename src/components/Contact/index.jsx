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
import { useContext } from "react";
import SlicedArrow from "../SlicedArrow";

const Contact = () => {
  const { openMap, setOpenMap, viewPort } = useContext(MainContext);
  return (
    <ContactContainer>
      <IframeSplitter>
        <IconContainer>
          <AiOutlinePhone style={{ filter: "drop-shadow(2px 2px black)" }} />
          <IconText>2392 42-2544</IconText>
        </IconContainer>
        <IconContainer>
          <MapButton
            onClick={() =>
              window.open("https://www.instagram.com/farmacia.leiva/?hl=es-la")
            }
            type="button"
          >
            <BsInstagram style={{ filter: "drop-shadow(2px 2px black)" }} />
            <IconText style={{ marginLeft: `${viewPort ? "1rem" : "0.5rem"}` }}>
              @farmacia.leiva
            </IconText>
          </MapButton>
        </IconContainer>
        <IconContainer>
          <MdOutlinePlace style={{ filter: "drop-shadow(2px 2px black)" }} />
          <IconText>Simini 978</IconText>
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
