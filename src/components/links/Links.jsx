import React from "react";
import styled from "styled-components";
import { Flex } from "..";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { uselink } from "../../constant/uselful-link";
import { useTranslation } from "react-i18next";

const Content = styled(Flex)`
  padding: 95px 0px 99px 0px;
  background: var(--Withe, #fff);
`;
const Box = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  text-align: center;
  padding-left: 10px;
`;
const Cards = styled(Flex)`
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 16px;
  align-items: flex-start;
  @media screen and (max-width: 435px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const titles = {
  uz: "Hamkorlar",
  ru: "Партнеры",
  en: "Partners",
  de: "Partner",
  zh: "合作伙伴",
};

const Links = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "uz";
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>{titles[lang] || titles["uz"]}</Title>
          <Cards>
            {uselink?.map((e) => (
              <NavLink
                key={e.id}
                to={e.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card img={e.img} text={e.title[lang] || e.title["uz"]} />
              </NavLink>
            ))}
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Links;
