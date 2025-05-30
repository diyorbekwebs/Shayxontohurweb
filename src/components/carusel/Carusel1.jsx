import React, { Component } from "react";
import Card from "./Card";
import styled from "styled-components";
import Slider from "react-slick";
import "./style.css";
import { Link } from "react-router-dom";
const Slider1 = styled(Slider)`
  width: 100%;
  border-radius: 8px !important;
  @media screen and (max-width: 435px) {
    width: 100%;
    height: 200px !important;
    background-color: red;
  }
`;

export default function Carusel1({ props }) {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider1 {...settings}>
      {props?.map((e) => (
        <Link key={e.id} to={`/infor/news3/${e.id}`}>
          <Card img={e.url} text={"test"} />
        </Link>
      ))}
    </Slider1>
  );
}
