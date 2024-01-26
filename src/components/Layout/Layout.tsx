import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MonitorSection from "../MonitorSection/MonitorSection";

function Layout() {
  return (
    <div>
      <Navbar />
      <MonitorSection />
      <Outlet />
    </div>
  );
}

export default Layout;
