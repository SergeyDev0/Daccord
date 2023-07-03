import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route index path="/login" element={ <Auth /> } />
        <Route index path="/registration" element={ <Reg /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
