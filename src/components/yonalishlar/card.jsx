import React from "react";
import { Test, TopVec } from "../../assets/img/img";
import styled from "styled-components";

const T1 = styled("p")`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: 0%;
`;
const Date = styled("p")`
  font-weight: 500;
  font-size: 14px;
  line-height: 110.00000000000001%;
  letter-spacing: 0%;
`;
export default function Card() {
  return (
    <div className="flex w-[417px] flex-col gap-[29px]">
      <img className="w-[417px] h-[304px] rounded-[10px]" src={Test} alt="" />
      <div className="flex w-[100%] justify-between items-center">
        <T1>Avtomobillarga xizmat texnik xizmat ko’rsatish</T1>
        <img src={TopVec} alt="" />
      </div>
      <Date>01.01.2024</Date>
    </div>
  );
}
