import React from "react";
import styled from "styled-components";
import { Test } from "../../assets/img/img";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Title h2 qilib semantik jihatdan to‘g‘rilandi
const Title = styled("h2")`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
`;

const Text = styled("p")`
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0%;
  width: 649px;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Btn = styled("div")`
  background: #e2ebd6;
  width: 251.0549774169922px;
  height: 67px;
  padding: 22px 43px;
  border-radius: 10px;
  color: #55a630;
  font-weight: 500;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function History() {
  const { t } = useTranslation();

  return (
    <section
      className="mb-[150px] mt-[55px]"
      aria-labelledby="history-title"
      aria-describedby="history-text"
    >
      <div className="container">
        <div className="flex flex-col gap-[34px]">
          <Title id="history-title">{t("history.title")}</Title>
          <div className="flex items-start gap-[50px]">
            <img
              className="w-[641px] h-[481px] rounded-[10px]"
              src={Test}
              alt={t("history.title")}
              loading="lazy"
            />
            <div className="flex h-[100%] flex-col gap-[38px] items-start">
              <Text id="history-text">{t("history.text")}</Text>
              <Link to={"about"} aria-label={t("history.btn")}>
                <Btn>{t("history.btn")}</Btn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
