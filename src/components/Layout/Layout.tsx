import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MonitorSection from "../MonitorSection/MonitorSection";

function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <MonitorSection />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
