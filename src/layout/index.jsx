import React from "react";
import { Outlet, Link } from "react-router";
import NavBar from "../components/nav";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
