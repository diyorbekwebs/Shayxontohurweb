import React from "react";
import styled from "styled-components";
// import { contactdb } from "../../constant/contact";
// import Mainpage from "../centralapp/Mainpage";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { Flex } from "..";
const Content = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 73px;
  padding-bottom: 73px;
  @media screen and (max-width: 435px) {
    width: 100%;
  }
`;
const Top = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  @media screen and (max-width: 435px) {
    width: 100%;
    align-items: center;
  }
`;

const YandexMap = styled(Map)`
  width: 100% !important;
  height: 550px !important;
  @media screen and (max-width: 435px) {
    width: 95% !important;
  }
`;
const YanMaps = styled(YMaps)`
  @media screen and (max-width: 435px) {
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Contact = () => {
  return (
    <Content>
      <div className="container">
        <Top>
          <YanMaps>
            <YandexMap
              defaultState={{ center: [41.342915, 69.166675], zoom: 18 }}
            >
              <Placemark defaultGeometry={[41.342915, 69.166675]} />
              <FullscreenControl />
              <ZoomControl />
            </YandexMap>
          </YanMaps>
        </Top>
      </div>
    </Content>
  );
};
export default Contact;
