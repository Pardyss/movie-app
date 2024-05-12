import Menu from "./Menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
