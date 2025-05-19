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
    <div>
      <img className="" src={Test} alt="" />
      <div>
        <div>
          <Title>Fruit and vegetables and protection against diseases</Title>
          <Text>Lorem ipsum djlor sit amet, consectetur adipiscing elit. </Text>
        </div>
        <div className="flex gap-[10px]">
          Read More <img src={RightVec} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
