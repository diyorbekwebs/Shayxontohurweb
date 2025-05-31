import React from "react";
import { useTranslation } from "react-i18next";
import { Poltexnikum } from "../../assets/img/img";
import { Title } from "../yonalishlar/yonalishlar";
import styled from "styled-components";

export const Text = styled("p")`
  font-family: Manrope;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #454545;
`;

export default function Texnikum() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="mt-[30px] flex flex-col gap-[70px]">
          <img src={Poltexnikum} alt="Politehnikum" />
          <div className="flex flex-col gap-[20px]">
            <Title>{t("history.title")}</Title>
            <Text>
              {t("history.text")}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
