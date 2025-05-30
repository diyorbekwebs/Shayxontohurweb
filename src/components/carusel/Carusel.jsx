import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Flex } from "..";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Carusel1 from "./Carusel1";
import { banners, breakingNews } from "../../constant/carusel/carusel";
const Content = styled(Flex)`
  padding: 20px 0 0 0;
  @media screen and (max-width: 435px) {
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 435px) {
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
  }
`;

const Marqueee = styled(Marquee)`
  padding: 17px 14px 18px 18px;
  border-radius: 8px;
  border: 1px solid #e6e1d8;
  background: #fff;
  cursor: pointer;
  position: relative;
  top: 35px;
`;

const Div = styled(Flex)`
  gap: 10px;
`;

const Text = styled.p`
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  @media screen and (max-width: 435px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  }
  &:hover {
    color: #6c9b31;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const Text2 = styled.p`
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  margin-right: 10px;
`;

export function Carusel() {
  const [carusel1, setCarusel1] = React.useState([]);
  const [carusel2, setCarusel2] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    let arr1 = [];
    let arr2 = [];
    banners.forEach((e) => {
      if (e.type === "right") arr1.push(e);
      if (e.type === "left") arr2.push(e);
    });
    setCarusel1(arr1);
    setCarusel2(arr2);
    setData2(breakingNews);
  }, []);

  // Til asosida sarlavha olish funksiyasi
  const getTitle = (item) => {
    const lang = i18n.language;
    // titleUz, titleRu, titleEn ...
    return (
      item[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`] ||
      item.titleUz
    );
  };

  return (
    <Content>
      <div className="container">
        <Box>
          <Carusel1 props={carusel1} />
          {/* <Carusel2 props={carusel2} /> */}
        </Box>
        <Marqueee pauseOnHover>
          {data2?.map((e) => (
            <Div key={e.id}>
              <Link style={{ color: "#000" }} to={`/infor/news/${e.id}`}>
                <Text>{getTitle(e)}</Text>
              </Link>
              <Text2>|</Text2>
            </Div>
          ))}
        </Marqueee>
      </div>
    </Content>
  );
}
