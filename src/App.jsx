import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";

const App = () => {
/*  const [viewPort, setViewPort] = useState(
    window.matchMedia("(min-width: 528px)").matches
  );
  useEffect(() => {
    const handler = (e) => setViewPort(e.matches);
    window.matchMedia("(min-width: 528px)").addEventListener("change", handler);
  }, []);
  console.log(viewPort);*/
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout /*viewPort={viewPort}*/>
          <Routes>
            <Route path="/*" element={<Home /*viewPort={viewPort}*/ />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
