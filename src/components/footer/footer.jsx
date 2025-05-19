import React from "react";
import { Call, Globe2, Logo, Message } from "../../assets/img/img";
import styled from "styled-components";
const Title = styled("h1")`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-transform: uppercase;
  width: 301px;
`;
const Ul = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Li = styled("li")`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0%;
  cursor: pointer;
`;
export default function Footer() {
  return (
    <footer className="bg-[#F5F3EF]">
      <div className="container">
        <div className="w-full pt-[63px] pb-[82px] flex justify-between">
          <div className="flex items-center gap-[17px]">
            <img src={Logo} alt="" />
            <Title>Toshkent Shahar shayxontohur Tuman Politexnikumi</Title>
          </div>
          <div className="flex gap-[66.5px]">
            <Ul>
              <Li>Agentlik</Li>
              <Li>Online kredit</Li>
              <Li>Tarkibiy tuzilma</Li>
            </Ul>
            <Ul>
              <Li>Axborot xizmati</Li>
              <Li>Me’yoriy hujjatlar</Li>
              <Li>Tarkibiy tuzilma</Li>
            </Ul>
            <Ul>
              <Li>Rahbariyat</Li>
              <Li>Ochiq ma’lumotlar</Li>
              <Li>Ochiq ma’lumotlar</Li>
            </Ul>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="flex items-center gap-[4.5px]">
              <img src={Call} alt="" />
              +998 71 206–70–30
            </li>
            <li className="flex items-center gap-[4.5px]">
              <img src={Message} alt="" />
              info@agro.uz
            </li>
            <li className="flex items-center gap-[4.5px]">
              <img src={Globe2} alt="" />
              www.agro.uz
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
