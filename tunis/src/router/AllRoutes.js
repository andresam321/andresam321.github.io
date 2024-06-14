import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "../views/Preview";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeRtl from "../views/all-home-version/HomeRtl";
import NotFound from "../views/NotFound";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="/home-dark" element={<HomeDark />} /> 
          <Route path="/home-rtl" element={<HomeRtl />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default AllRoutes;