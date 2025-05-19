import React from "react";
import { Carusel } from "../../components/carusel/Carusel";
import Lastnews from "../../components/lastnews/lastnews";
import Links from "../../components/links/Links";

export default function News() {
  return (
    <>
      <Carusel />
      <Lastnews />
      <Links />
    </>
  );
}
