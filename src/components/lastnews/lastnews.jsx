import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Title = styled("h2")`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1%;
  text-transform: uppercase;
`;
export default function Lastnews() {
  return (
    <div className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[40px]">
          <Title>So’ngi Yangiliklar...</Title>
          <div className="flex flex-col gap-[50px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
