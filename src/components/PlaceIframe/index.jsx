import { PlaceIframeContainer, Iframe } from "./styles";

const PlaceIframe = ({ openMap }) => {
  return (
    <PlaceIframeContainer>
      <Iframe
        width="100%"
        height={`${openMap ? "500px" : "0px"}`}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&q=Simini+978+Trenque+Lauquen&t=&z=16&ie=UTF8&iwloc=B&output=embed"      />
    </PlaceIframeContainer>
  );
};

export default PlaceIframe;
