import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div
    style={{
      height: "100vh",
    }}
  >
    <Header />
    {children}
    {/*<Footer />*/}
  </div>
);

export default Layout;
