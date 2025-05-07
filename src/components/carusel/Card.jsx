import React from "react";
import styled from "styled-components";
import { Flex } from "..";
import "./style.css";
const Content = styled(Flex)`
  width: 873px;
  height: 430px;
  padding: 320px 0px 65px 0px;
  border-radius: 8px;
  @media screen and (max-width: 435px) {
    width: 100%;
    height: 200px;
    padding: 90px 0px 0px 0px;
    align-items: flex-start;
  }
`;
const Texts = styled(Flex)`
  width: 100%;
  gap: 52px;
  height: 175px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 46px 40px 0px 40px;
  opacity: 0.8;
  background: linear-gradient(
    360deg,
    #142005 0%,
    rgba(20, 32, 5, 0.49) 78.88%,
    rgba(20, 32, 5, 0) 100%
  );
  @media screen and (max-width: 435px) {
    padding: 40px 0px 0px 20px;
  }
`;
const Text1 = styled.h4`
  color: #fff;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  text-transform: uppercase;
  width: 642px;
  border-radius: 8px;
  @media screen and (max-width: 435px) {
    width: 350px;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px; /* 125% */
  }
`;

const Div = styled.div`
  border-radius: 8px;
`;
const Card = ({ img, text }) => {
  return (
    <Div>
      <Content style={{ backgroundImage: `url(${img})`,backgroundSize:"cover", backgroundRepeat:"no-repeat" }}>
        <Texts>
          <Text1>{text}</Text1>
          {/* <Text2>28 Mart 2023</Text2> */}
        </Texts>
      </Content>
    </Div>
  );
};

export default Card;
