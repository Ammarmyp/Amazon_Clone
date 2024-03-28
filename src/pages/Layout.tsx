import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BasketProvider from "../providers/BasketProvider";

const Layout = () => {
  return (
    <>
      <BasketProvider>
        <Header />
        <Outlet />
      </BasketProvider>
    </>
  );
};

export default Layout;
