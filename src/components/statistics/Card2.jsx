import React from "react";
import styled from "styled-components";
import { Flex } from "..";
import "./statistik.css";
import axios from "axios";
const Box = styled(Flex)`
  width: 426px;
  padding: 33px 0px 62px 46px;
  border-radius: 8px;
  background: var(--Withe, #fff);
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  @media screen and (max-width: 435px) {
    width: 100%;
  }
`;
const Text1 = styled.h5`
  color: #141f14;
  font-family: Open Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Text2 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Text3 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Texts2 = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;
const Texts1 = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;
const Texts3 = styled(Flex)`
  gap: 35px;
  align-items: flex-start;
`;
const Card2 = () => {
  const [data, setData] = React.useState({});
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
    <Box className="box">
      <Texts1>
        <Texts2>
          <Text1>{data?.totalCount}</Text1>
          <Text2>Umumiy kelish tushgan arizalar</Text2>
        </Texts2>
        <Texts2>
          <Text1>{data?.solved}</Text1>
          <Text2>Hal qilingan arizalar</Text2>
        </Texts2>
      </Texts1>
      <Texts3>
        <Texts2>
          <Text3>{data?.uderReview}</Text3>
          <Text2>Korib chiqlayotgan arizalar</Text2>
        </Texts2>
        <Texts2>
          <Text3>{data?.rejected}</Text3>
          <Text2>Rad etilgan arizalar</Text2>
        </Texts2>
      </Texts3>
    </Box>
  );
};

export default Card2;
