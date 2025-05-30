import React from "react";
import styled from "styled-components";
import { Mail, Phone, Test } from "../../assets/img/img";
const Text1 = styled("h3")`
  width: 249px;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
`;
const Text2 = styled("p")`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
  color: #141414;
`;
const Text3 = styled("p")`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #474747;
  vertical-align: middle;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Btn = styled("div")`
  font-family: Roboto;
  font-weight: 700;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  background: #76a43dab;
  width: 162.0660400390625px;
  height: 33.97792053222656px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #fff;
`;
export default function Card() {
  return (
    <div className="flex flex-col bg-[#fff] gap-[11px] items-center pt-[13px] pb-[34px] rounded-[13px] w-[308px]">
      <img
        className="w-[109px] h-[110px] mb-[2px] rounded-[50px]"
        src={Test}
        alt=""
      />
      <Text1>XUSNIDDIN KARIMOV MOMINOVICH</Text1>
      <Text2 className="mb-[18px]">Direktor</Text2>
      <div className="mb-[16px]">
        <Text3>
          <img src={Phone} alt="" />
          +998979877878
        </Text3>
        <Text3>
          <img src={Mail} alt="" />
          diyor@gmail.com
        </Text3>
      </div>
      <Btn>Показать еще</Btn>
    </div>
  );
}
