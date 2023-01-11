import Footer from "./Footer";
import { Container, Wrapper } from "./LayoutStyled";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const Layout = function ({ children }) {
  return (
    <Wrapper>
      <header>
        <Nav />
      </header>
      <Container>
        {/* <Sidebar /> */}
        <main>{children}</main>
      </Container>
      {/* <footer>
        <Footer />
      </footer> */}
    </Wrapper>
  );
};

export default Layout;
