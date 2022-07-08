import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileContext } from "./context";

// import pages
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <ProfileContext.Provider value={{ name: "bilkis" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* AUTHENTICATION PAGES */}
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />

            {/* NOT AUTHENTICATION PAGES */}
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}
