import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home/Home";
import GlobalStyles from "./GlobalStyles";
import { MainProvider } from "./components/GlobalContext";

const App = () => {
  return (
    <MainProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MainProvider>
  );
};

export default App;
