import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import userhelperlibrary from "userhelperlibrary";

export default function App() {
  React.useEffect(() => {
    userhelperlibrary();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}
