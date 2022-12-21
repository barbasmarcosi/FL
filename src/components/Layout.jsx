import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div style={{ maxWidth: "100%", width: "100%" }}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
