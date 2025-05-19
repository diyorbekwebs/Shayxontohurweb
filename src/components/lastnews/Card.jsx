import React from "react";
import styled from "styled-components";
import { RightVec, Test } from "../../assets/img/img";

const Title = styled("h4")`
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  letter-spacing: 0px;
`;
const Text = styled("p")`
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  letter-spacing: 2%;
`;
export default function Card() {
  return (
    <div className="flex items-center gap-[50px]">
      <img className="w-[630px] h-[565px]" src={Test} alt="" />
      <div className="flex flex-col gap-[137px]">
        <div className="flex flex-col gap-[18px]">
          <Title>Fruit and vegetables and protection against diseases</Title>
          <Text>Lorem ipsum djlor sit amet, consectetur adipiscing elit. </Text>
        </div>
        <div className="flex gap-[10px]">
          Read More <img src={RightVec} alt="" />
        </div>
      </div>
    </div>
  );
}
