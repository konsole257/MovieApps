import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import '@/assets/css/layouts/contents.css';
import '@/assets/css/layouts/BottomNav.css';

const Layout = () => {
  return (
  <>
    <main id="main">
        <Outlet />
    </main>
    <BottomNav />
  </>
  );
}

export default Layout;