import React from "react";
import Card2 from "./Card2";
import "./car2.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
const settings = {
  dots: true,
  fade: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider2 = styled(Slider)`
  width: 427px;
  @media screen and (max-width: 435px) {
    width: 100%;
    height: 200px;
  }
`;
const Carusel2 = ({ props }) => {
  return (
    <Slider2 {...settings}>
      {props?.map(e => (
        <Link key={e.id} to={`/infor/news3/${e.id}`}>
          <Card2
            t1={
             "test"
            }
          />
        </Link>
      ))}
    </Slider2>
  );
};

export default Carusel2;
