import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomeView from "./assets/views/Main";
import lenis from "./utills/lenis";
import link from "./utills/link";
import Join from "./assets/views/components/join/Join";
import Login from "./assets/views/components/login/Login";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* 여기에 다른 페이지 넣기 */}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<myPage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </BrowserRouter>
  );
};

export default App;
