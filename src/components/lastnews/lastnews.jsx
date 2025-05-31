import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { banners } from "../../constant/carusel/carusel";
import { Link } from "react-router-dom";

const Title = styled("h2")`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1%;
  text-transform: uppercase;
`;

export default function Lastnews({ mt, mb }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const getTitle = (item) =>
    item[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`] ||
    item.titleUz;

  const getDescription = (item) =>
    item[`description${lang.charAt(0).toUpperCase() + lang.slice(1)}`] ||
    item.descriptionUz;

  return (
    <div style={{ marginTop: mt || "100px", marginBottom: mb || "0px" }}>
      <div className="container">
        <div className="flex flex-col gap-[40px]">
          <Title>{t("latest_news")}</Title>
          <div className="flex flex-col gap-[50px]">
            {banners?.map((item) => (
              <Link to={`/banner/${item.id}`} key={item.id}>
                <Card
                  img={item.url}
                  title={getTitle(item)}
                  desc={getDescription(item)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
