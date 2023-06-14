import React, { useEffect } from "react";
import "./autoload";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Download from "./pages/Download";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
