import React from "react";
import styled from "styled-components";
import Card from "./card";
const Title = styled("h1")`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1%;
  text-transform: uppercase;
`;
export default function Staffs() {
  return (
    <div className="bg-[#F5F3EF] pt-[40px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[30px] ">
          <Title>Raxbariyat</Title>
          <div className="w-full flex items-center mb-[30px] justify-center">
            <Card />
          </div>

          <div className="w-full flex items-start gap-[29px] flex-wrap">
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
