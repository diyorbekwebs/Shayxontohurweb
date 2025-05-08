// eslint-disable-next-line no-unused-vars
import React from "react";
import { styled } from "styled-components";
import { statisInfo } from "../../constant/statistic";
import Chart from "./Chart";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { Link } from "react-router-dom";

const Content = styled.div`
  padding: 60px 0px 70px 0px;
  background: #f5f3ef;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
const Div = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1281px) {
    gap: 10px;
  }
  @media screen and (max-width: 435px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Card1 = styled.div`
  width: 427px;
  padding: 29px 8cqh 29px 31px;
  border-radius: 8px;
  background: var(--Withe, #fff);
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1281px) {
    width: 400px;
    padding: 51px 51px 51px 51px;
  }
`;
const Card1Img = styled.img`
  width: 61px;
  height: 58px;
`;
const Text1 = styled.p`
  width: 260px !important;
  color: #000000;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Title = styled.h5`
  height: 34px;
  color: #141f14;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
  padding-left: 20px;
`;
const Card = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>Statistika</Title>
          <Bottom>
            {/* <Div>
              {statisInfo?.map((e) => {
                return (
                  <Link key={e.id} to={e.path}>
                    <Card1>
                      <Card1Img src={e.img} />
                      <Text1>{e.lang["uz"].text}</Text1>
                    </Card1>
                  </Link>
                );
              })}
            </Div> */}
            <Div>
              <Chart />
              <Card2 />
              <Card3 />
            </Div>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Card;
