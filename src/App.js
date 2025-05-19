import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import userhelperlibrary from "userhelperlibrary";
import Home from "./Pages/home/home";
import About from "./Pages/about/about";
import News from "./Pages/news/new";

export default function App() {
  React.useEffect(() => {
    userhelperlibrary();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}
