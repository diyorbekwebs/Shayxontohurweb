import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../yonalishlar/yonalishlar";
import { itemswhyus } from "../../constant/whyus/index";
import Card from "./Card";
import styled from "styled-components";

const Title2 = styled(Title)``;

export default function Whyus() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "uz";


  return (
    <div>
      <div className="container">
        <div className="flex items-center flex-col gap-[52px] mb-[110px]">
          <Title>{t("whyus.title") || "Nima uchun biz"}</Title>
          <div className="flex items-start gap-[30px] flex-wrap">
            {itemswhyus?.map((e) => (
              <Card
                key={e.id}
                text1={e.title[lang]}
                text2={e.description[lang]}
                background={e.background}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
