import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MonitorSection from "../MonitorSection/MonitorSection";
import Login from "../../pages/Login/Login";

const isLogged = false;

function Layout() {
  return (
    <div>
      <Navbar isLogged={isLogged} />
      {isLogged ? (
        <div style={{ display: "flex" }}>
          <MonitorSection />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Layout;
