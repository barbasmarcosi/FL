import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";
import { MainProvider } from "./components/GlobalContext";

const App = () => {
  return (
    <MainProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MainProvider>
  );
};

export default App;
