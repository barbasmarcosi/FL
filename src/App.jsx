import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <GlobalStyles />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
