import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/CarModels";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/OurTeam";
import Contact from "./pages/Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Models" element={<Models />} />
      <Route exact path="/Testimonials" element={<Testimonials />} />
      <Route exact path="/Team" element={<Team />} />
      <Route exact path="/Contact" element={<Contact />} />
      AllRoutes
    </Routes>
  );
};

export default AllRoutes;
