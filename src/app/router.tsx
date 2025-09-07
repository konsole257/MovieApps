import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Search from "../pages/Search";
import Mypage from "../pages/Mypage";
import Detail from "../pages/Detail";

export const AppRouter = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Favorite" element={<Favorite />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Mypage" element={<Mypage />} />
      <Route path="/Detail" element={<Detail />} />
    </Route>
  </Routes>
);