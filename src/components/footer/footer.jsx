import React from "react";
import { Call, Globe2, Logo, Message } from "../../assets/img/img";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <footer className="bg-[#F5F3EF]">
      <div className="container">
        <div className="w-full pt-[63px] pb-[82px] flex justify-between">
          <div className="flex items-center gap-[17px]">
            <img className="w-[100px]" src={Logo} alt="logo" />
            <Title>{t("footer.title")}</Title>
          </div>
          <div className="flex gap-[66.5px]">
            <Ul>
              <Li>{t("footer.home")}</Li>
              <Li>{t("footer.about")}</Li>
              <Li>{t("footer.news")}</Li>
            </Ul>
            <Ul>
              <Li>{t("footer.partners")}</Li>
              <Li>{t("footer.directions")}</Li>
              <Li>{t("footer.management")}</Li>
            </Ul>
            <Ul>
              <Li>{t("footer.contact")}</Li>
              <Li>{t("footer.address")}</Li>
            </Ul>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="flex items-center gap-[4.5px]">
              <img src={Call} alt="call" />
              +998712185542
            </li>
            <li className="flex items-center gap-[4.5px]">
              <img src={Message} alt="mail" />
              sht_politexnikumi@umail.uz
            </li>
            <li className="flex items-center gap-[4.5px]">
              <img src={Globe2} alt="web" />
              sht_politexnikumi@umail.uz
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
