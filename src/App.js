import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import userhelperlibrary from "userhelperlibrary";
import Home from "./Pages/home/home";
import About from "./Pages/about/about";
import News from "./Pages/news/new";
import Leadership from "./Pages/Leadership/Leadership";
import ContactPage from "./Pages/contact/ContactPage";
import KafedraPage from "./Pages/kafedra_page/kafedraPage";
import Page from "./components/OnePage/Page";
import "aos/dist/aos.css";
import ScrollToTop from "./scroll";
import IntroAnimation from "./IntroAnimation";
import TestBanner from "./TestBanner";

export default function App() {
  // const [showIntro, setShowIntro] = useState(true); // Always true initially

  // useEffect(() => {
  //   userhelperlibrary();
  //   const timer = setTimeout(() => {
  //     setShowIntro(false); // Hide after 3 seconds
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {showIntro && <IntroAnimation />}
      {!showIntro && ( */}
        <>
          <TestBanner />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="news" element={<News />} />
              <Route path="leadership" element={<Leadership />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="kafedra" element={<KafedraPage />} />
              <Route path="/banner/:id" element={<Page />} />
            </Route>
          </Routes>
        </>
      {/* )} */}
    </>
  );
}
