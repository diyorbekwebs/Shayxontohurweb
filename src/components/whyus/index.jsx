import React from "react";
import { Title } from "../yonalishlar/yonalishlar";
import { itemswhyus } from "../../constant/whyus/index";
import Card from "./Card";
import styled from "styled-components";
const Title2 = styled(Title)``;
export default function Whyus() {
  return (
    <div>
      <div className="container">
        <div className="flex items-center flex-col gap-[52px] mb-[110px]">
          <Title>Nima uchun biz</Title>
          <div className="flex items-start gap-[30px] ">
            {itemswhyus?.map((e) => (
              <Card
                key={e.id}
                text1={e.text1}
                text2={e.text2}
                background={e.background}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
