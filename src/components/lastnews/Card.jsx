import React from "react";
import styled from "styled-components";
import { RightVec, Test } from "../../assets/img/img";

const Title = styled("h4")`
  font-weight: 700;
  font-size: 34px;
  line-height: 45px;
  letter-spacing: 0px;
  width: 650px;
`;
const Text = styled("p")`
  width: 650px;
  font-weight: 500;
  font-size: 22px;
  line-height: 140%;
  letter-spacing: 2%;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 3 qator */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default function Card({ img, title, desc }) {
  return (
    <div className="flex items-center gap-[40px]">
      <img className="w-[530px] h-[420px]" src={img} alt="" />
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col gap-[20px]">
          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: desc }}></Text>
        </div>
        <div className="flex text-[24px] gap-[10px] items-center">
          Read More <img className="w-[70px] h-[25px]" src={RightVec} alt="" />
        </div>
      </div>
    </div>
  );
}
