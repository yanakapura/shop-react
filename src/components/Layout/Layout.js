import Header from "./Header/Header";
import Menu from "./Menu/Menu";

const Layout = (props) => {
  return (
    <>
      <Menu />
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
