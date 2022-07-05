import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
