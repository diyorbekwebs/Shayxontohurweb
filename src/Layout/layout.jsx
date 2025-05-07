import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import { Carusel } from "../components/carusel/Carusel";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Carusel/>
      <Outlet />
    </>
  );
}
