import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import {
  IconContainer,
  ContactContainer,
  IconText,
  IframeContainer,
  MapButton,
} from "./styles";
import PlaceIframe from "../PlaceIframe";
import { useState } from "react";

const Contact = () => {
  const [openMap, setOpenMap] = useState(false);
  return (
    <ContactContainer>
      <IconContainer>
        <AiOutlinePhone />
        <IconText>2915249223</IconText>
      </IconContainer>
      <IconContainer>
        <AiOutlineMail />
        <IconText>barbasmarcosi@gmail.com</IconText>
      </IconContainer>
      <IconContainer>
        <MdOutlinePlace />
        <IconText>Wilde 122</IconText>
      </IconContainer>
      <IconContainer>
        <MapButton
          onClick={() => setOpenMap(!openMap)}
          type="button"
          value={`${openMap ? "Ocultar Mapa" : "Ver Mapa"}`}
        />
      </IconContainer>
      <IframeContainer>
        <PlaceIframe openMap={openMap} />
      </IframeContainer>
    </ContactContainer>
  );
};

export default Contact;
