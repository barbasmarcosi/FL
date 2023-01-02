import Carrousel from "../../components/Carrousel";
import { AiOutlineExperiment } from "react-icons/ai";
import { Logo, About } from "./styles";
import Contact from "../../components/Contact";

const Home = ({ }) => {
  return (
    <>
      <Logo>
        <AiOutlineExperiment />
      </Logo>
      <About>
        Acá va un texto descriptivo de quienes somos.
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
      <Contact />
    </>
  );
};

export default Home;
