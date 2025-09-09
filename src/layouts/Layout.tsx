import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import BottomNav from './BottomNav';
import Detail from '../pages/Detail';
import '@/assets/css/layouts/contents.css';
import '@/assets/css/layouts/bottomnav.css';

const Layout = () => {
  const location = useLocation();

  return (
  <>
    <main id="main">
        <Outlet />
    </main>
    
    <hr id="main-end" />

    <BottomNav />

    <AnimatePresence>
      {location.pathname.includes("/Detail") && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="page-translate"
        >
          <Detail />
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}

export default Layout;