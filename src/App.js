import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileContext } from "./context";
import axios from "axios";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// import pages
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ListUsers from "./pages/ListUsers";
import Logout from "./pages/Logout";

export default function App() {
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      if (localStorage.getItem("token")) {
        config.headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
      }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProfileContext.Provider
          value={
            localStorage.getItem("user")
              ? JSON.parse(localStorage.getItem("user"))
              : {}
          }
        >
          <BrowserRouter>
            <Routes>
              <Route path="/">
                {/* AUTHENTICATION PAGES */}
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="list-users" element={<ListUsers />} />

                {/* NOT AUTHENTICATION PAGES */}
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProfileContext.Provider>
      </PersistGate>
    </Provider>
  );
}
