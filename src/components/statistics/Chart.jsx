import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import { Flex } from "..";
import axios from "axios";

const Box = styled(Flex)`
  padding: 38px 50px 59px 39px;
  border-radius: 8px;
  background: var(--Withe, #fff);
  flex-direction: column;
  gap: 37px;
  width: 427px;
  @media screen and (max-width: 435px) {
    width: 100%;
  }
`;
const defaultLabelStyle = {
  fontSize: "8px",
  fontFamily: "sans-serif",
};
const Color1 = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 10000px;
  background: #3dafb7;
`;
const Color2 = styled(Color1)`
  background: #2c4da4;
`;
const Color3 = styled(Color1)`
  background: #d16eff;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Items2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Item = styled.li`
  color: #141f14;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Chart = () => {
  const shiftSize = 7;
  const [data, setData] = React.useState();
  async function getInfo() {
    try {
      await axios
        .get("https://api.agroxizmatlar.uz/agency-statistic")
        .then((e) => setData(e.data));
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getInfo();
  }, []);

  return (
    <Box>
      <PieChart
        style={{
          width: "217px",
          height: "218px",
        }}
        label={({ dataEntry }) => dataEntry.value + "%"}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        data={[
          {
            title: "Rad qilingan",
            value: data?.underReviewPercantage,
            color: "#2C4DA4",
          },
          {
            title: "Korib chiqilmoqda",
            value: data?.rejectedPercantage,
            color: "#4EB027",
          },
          {
            title: "Hal qilingan",
            value: data?.solvedPercantage,
            color: "#D16FFF",
          },
        ]}
      />
      <Status>
        <Items2>
          <Color1 />
          <Item>Korib chiqilmoqda</Item>
        </Items2>
        <Items2>
          <Color2 />
          <Item>Rad qilingan</Item>
        </Items2>
        <Items2>
          <Color3 />
          <Item>Hal qilingan</Item>
        </Items2>
      </Status>
    </Box>
  );
};

export default Chart;
