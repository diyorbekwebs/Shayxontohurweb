import React from "react";
import Texnikum from "../../components/texnikum";
import Yonalishlar from "../../components/yonalishlar/yonalishlar";
import Oquvtizim from "../../components/oquvtizimi/index";
import Links from "../../components/links/Links";

export default function About() {
  return (
    <>
      <Texnikum />
      <Yonalishlar />
      <Oquvtizim />
      <Links />
    </>
  );
}
