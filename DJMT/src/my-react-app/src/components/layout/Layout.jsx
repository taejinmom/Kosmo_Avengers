import { Outlet } from "react-router-dom";
import "./Layout.css";
import "../../styles/Common.css";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Aside from "../aside/Aside.jsx";
import { useCookies } from "react-cookie";

const Layout = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  return (
    <>
      <Header
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Aside />
    </>
  );
};

export default Layout;
