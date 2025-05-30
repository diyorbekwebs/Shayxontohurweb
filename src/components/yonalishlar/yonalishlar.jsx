import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Card from "./card";
import { oquvY } from "../../constant/yonalish/oquv-yonalish";

export const Title = styled("h1")`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 35px;
  line-height: 100%;
  font: bold;
`;
export default function Yonalishlar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "uz";

  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[27px] ">
          <Title>{t("yonalishlar.title")}</Title>
          <div className="flex flex-col gap-[27px] items-center">
            <div className="flex gap-[33px] items-start flex-wrap justify-center">
              {oquvY?.map((e) => (
                <Card
                  key={e.id}
                  title={e.title[lang]}
                  img={e.img}
                  date={e.date}
                />
              ))}
            </div>
            <div className="bg-[#76A43D87] py-[10px] font-bold text-[#fff] text-[16px] px-[40px] rounded-[10px] cursor-pointer">
              {t("yonalishlar.showMore")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
