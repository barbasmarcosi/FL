import Carrousel from "../../components/Carrousel";
import { AiOutlineExperiment } from "react-icons/ai";
import { Logo, About } from "./styles";
import PlaceIframe from "../../components/PlaceIframe";
import Contact from "../../components/Contact";

const Home = ({ viewPort }) => {
  return (
    <>
      <Logo>
        <AiOutlineExperiment />
      </Logo>
      <About>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet
        animi consequuntur cum quis explicabo inventore, rerum repellendus nulla
        obcaecati impedit. Quaerat neque, aspernatur eum impedit necessitatibus
        tenetur sed tempora. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. In eveniet animi consequuntur cum quis explicabo inventore, rerum
        repellendus nulla obcaecati impedit. Quaerat neque, aspernatur eum
        impedit necessitatibus tenetur sed tempora. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. In eveniet animi consequuntur cum quis
        explicabo inventore, rerum repellendus nulla obcaecati impedit. Quaerat
        neque, aspernatur eum impedit necessitatibus tenetur sed tempora.
      </About>
      <Carrousel viewPort={viewPort} />
      <Contact />
    </>
  );
};

export default Home;
