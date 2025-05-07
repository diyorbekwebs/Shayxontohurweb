import React from "react";
import styled from "styled-components";
import { Flex } from "..";
import "./style.css";
const Content = styled(Flex)`
  width: 873px;
  height: 430px;
  padding: 285px 40px 65px 40px;
  border-radius: 8px;
`;
const Texts = styled(Flex)`
  gap: 52px;
  flex-direction: column;
  align-items: flex-start;
`;
const Text1 = styled.h4`
  color: #fff;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  text-transform: uppercase;
  width: 600px;
`;
const Text2 = styled.h5`
  color: #fff;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  opacity: 0.5;
`;
const Card3 = () => {
  return (
    <Content className="carusel-img2">
      <Texts>
        <Text1>15 sotix yerda 25 milion daromad.</Text1>
        {/* <Text2>28 Mart 2023</Text2> */}
      </Texts>
    </Content>
  );
};

export default Card3;
