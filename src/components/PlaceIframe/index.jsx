import { PlaceIframeContainer, Iframe } from "./styles";

const PlaceIframe = ({ openMap }) => {
  console.log(openMap);
  return (
    <PlaceIframeContainer>
      <Iframe
        width="100%"
        height={`${openMap ? "600px" : "0"}`}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
    </PlaceIframeContainer>
  );
};

export default PlaceIframe;
