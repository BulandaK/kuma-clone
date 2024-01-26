import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
