import React from "react";
import { Carusel } from "../../components/carusel/Carusel";
import Yonalishlar from "../../components/yonalishlar/yonalishlar";
import Oquvtizim from "../../components/oquvtizimi/index";
import Card from "../../components/statistics/Card";
import History from "../../components/history/history";
import Whyus from "../../components/whyus/index";
import Contact from "../../components/contact/index";
import Links from "../../components/links/Links";
import ScrollToTopButton from "../../components/scroll";

export default function Home() {
  return (
    <>
      <Carusel />
      <Yonalishlar />
      <Oquvtizim />
      <Card />
      <History />
      <Whyus />
      <Contact />
      <Links />
      <ScrollToTopButton />
    </>
  );
}
