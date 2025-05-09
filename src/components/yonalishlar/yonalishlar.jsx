import React from "react";
import Card from "./card";
import styled from "styled-components";

export const Title = styled("h1")`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 35px;
  line-height: 100%;
  font: bold;
`;
export default function Yonalishlar() {
  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[27px] ">
          <Title>O’quv Yo’nalishlari</Title>
          <div className="flex flex-col gap-[27px] items-center">
            <div className="flex gap-[33px] items-start">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="bg-[#76A43D87] py-[10px] font-bold text-[#fff] text-[16px] px-[40px] rounded-[10px]">
              Показать еще
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
