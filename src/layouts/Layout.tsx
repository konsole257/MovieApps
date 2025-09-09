import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import '@/assets/css/layouts/contents.css';
import '@/assets/css/layouts/bottomnav.css';

const Layout = () => {
  return (
  <>
    <main id="main">
        <Outlet />
    </main>
    
    <hr id="main-end" />

    <BottomNav />
  </>
  );
}

export default Layout;