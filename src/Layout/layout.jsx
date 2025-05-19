import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer />
    </>
  );
}
