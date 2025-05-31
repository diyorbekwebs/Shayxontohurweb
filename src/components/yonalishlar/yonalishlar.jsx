import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Card from "./card";
import { oquvY } from "../../constant/yonalish/oquv-yonalish";

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 35px;
    text-align: left;
  }
`;

export default function Yonalishlar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "uz";
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? oquvY : oquvY.slice(0, 3);

  return (
    <div className="mt-[60px] sm:mt-[80px] lg:mt-[100px] mb-[60px] sm:mb-[80px] lg:mb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-6 sm:gap-[27px]">
          <Title>{t("yonalishlar.title")}</Title>

          <div className="flex flex-col gap-6 items-center">
            {/* Cards container */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-[33px]">
              {visibleCards.map((e) => (
                <Card
                  key={e.id}
                  title={e.title[lang]}
                  img={e.img}
                  date={e.date}
                />
              ))}
            </div>

            {/* Show More button */}
            {!showAll && oquvY.length > 3 && (
              <button
                onClick={() => setShowAll(true)}
                className="bg-[#76A43D] hover:bg-[#5d832f] transition-colors duration-300 py-2 px-6 text-white font-semibold text-sm sm:text-[16px] rounded-[10px]"
              >
                {t("yonalishlar.showMore")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
