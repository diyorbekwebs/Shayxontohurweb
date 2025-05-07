import React from "react";
import styled from "styled-components";
import { Flex } from "..";
import { Globe } from "../../assets/img/img";
const Content = styled(Flex)`
  width: 427px;
  height: 430px;
  border-radius: 8px;
  background: #6c9b31;
  padding: 60px 54px 136px 47px;
  flex-direction: column;
  gap: 47px;
  align-items: flex-start;
  @media screen and (max-width: 435px) {
    width: 100%;
    height: 200px;
    padding: 40px 34px 116px 27px;
  }
`;

const Text = styled.h5`
  color: #fff;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; /* 103.125% */
  width: 342px;
  @media screen and (max-width: 435px) {
    width: 342px;
    font-size: 24px;
    font-weight: 600;
    line-height: 25px; /* 125% */
  }
`;
const Img = styled.img`
  stroke-width: 3px;
  stroke: #fff;
  width: 117.5px;
  height: 22px;
  flex-shrink: 0;
`;
const Card2 = ({ t1 }) => {
  return (
    <Content>
      <Text>{t1}</Text>
      <Img src={Globe} />
    </Content>
  );
};

export default Card2;
