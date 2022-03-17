import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "../../components/pages/public/";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
