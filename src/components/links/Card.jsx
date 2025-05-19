import React from "react";
import { styled } from "styled-components";
const Content = styled.div`
  padding: 19px 24px 18px 24px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  border-radius: 5px;
  background: #f5f3ef;
  align-items: center;
  width: 315px;
  height: 160px;
  cursor: pointer;
  @media screen and (max-width: 435px) {
    width: 400px !important;
    flex-direction: column;
    align-items: center;
    height: 180px;
  }
`;
const Img = styled.img`
  width: 148px;
  height: 67px;
  flex-shrink: 0;
`;
const Text = styled.p`
  width: 268px;
  color: #141414;
  text-align: center;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Card = ({ img, text }) => {
  return (
    <Content>
      <Img src={img } />
      <Text>
        {text || "O’zbekiston Respublikasi Prezidentining virtual qabulxonasi"}
      </Text>
    </Content>
  );
};

export default Card;
