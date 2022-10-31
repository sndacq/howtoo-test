import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';

import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import AccordionPage from "./pages/AccordionPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-page">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="accordion" element={<AccordionPage />} />
        </Routes>
      </div>    
    </BrowserRouter>
  );
};

export default App;
