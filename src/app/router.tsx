import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import HomeMovie from "../pages/HomeMovie";
import HomeTV from "../pages/HomeTV";
import Favorite from "../pages/Favorite";
import Search from "../pages/Search";
import Mypage from "../pages/Mypage";
import Detail from "../pages/Detail";

export const AppRouter = () => {
  const location = useLocation();

  return (
  <>
    <Routes location={location}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Popular" element={<Home />}>
          <Route path="Detail" element={<Detail />} />
        </Route>
        <Route path="/Movie" element={<HomeMovie />} />
        <Route path="/TV" element={<HomeTV />} />

        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Mypage" element={<Mypage />} />    
      </Route>
    </Routes>
  </>
  )
};