import React from "react";
import { Carusel } from "../../components/carusel/Carusel";
import Yonalishlar from "../../components/yonalishlar/yonalishlar";
import Oquvtizim from "../../components/oquvtizimi/index";
import Card from "../../components/statistics/Card";
import History from "../../components/history/history";

export default function Home() {
  return (
    <>
      <Carusel />
      <Yonalishlar />
      <Oquvtizim />
      <Card />
      <History />
    </>
  );
}
