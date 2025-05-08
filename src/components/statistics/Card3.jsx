import React from "react";
import { styled } from "styled-components";
// import { Icon11, Icon12, Icon13 } from "../../assets/imgs/img";
import axios from "axios";
const Card = styled.div`
  padding: 52px 171px 106px 57px;
  width: 426px;
  border-radius: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 1281px) {
    width: 400px;
    padding: 64px 155px 194px 61px;
  }
  @media screen and (max-width: 435px) {
    width: 100%;
    padding: 50px;
    border-radius: 8px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Text1 = styled.h3`
  color: #141f14;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Text2 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
  opacity: 0.4;
`;
const Card3 = () => {
  const [data, setData] = React.useState();
  async function getInfo() {
    await axios
      .get("https://api.agroxizmatlar.uz/agency-statistic")
      .then((e) => setData(e.data));
  }
  React.useEffect(() => {
    getInfo();
  }, []);

  return (
    <Card>
      <Item>
        {/* <img src={Icon11} alt="" /> */}
        <Texts>
          <Text1>{data?.detachedLandArea}</Text1>
          <Text2>Ajiratilgan yer maydoni</Text2>
        </Texts>
      </Item>
      <Item>
        {/* <img src={Icon12} alt="" /> */}
        <Texts>
          <Text1>{data?.allocatedSubsidies}</Text1>
          <Text2>Ajiratilgan subsidiyalar</Text2>
        </Texts>
      </Item>
      <Item>
        {/* <img src={Icon13} alt="" /> */}
        <Texts>
          <Text1>{data?.greenhouseSubsidies}</Text1>
          <Text2>Issiqxona uchun subsidiyalar</Text2>
        </Texts>
      </Item>
    </Card>
  );
};

export default Card3;
