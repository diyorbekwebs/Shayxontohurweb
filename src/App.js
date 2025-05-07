import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}
