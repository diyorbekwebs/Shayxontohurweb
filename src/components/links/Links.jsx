import React from "react";
import styled from "styled-components";
import { Flex } from "..";
import Card from "./Card";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { uselink } from "../../constant/uselful-link";
const Content = styled(Flex)`
  padding: 95px 0px 99px 0px;
  background: var(--Withe, #fff);
`;
const Box = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
const Title = styled.h3`
  color: #141414;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding-left: 20px;
`;
const Cards = styled(Flex)`
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 16px;
  align-items: flex-start;
  @media screen and (max-width: 435px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Links = () => {
  // const [value, setValue] = React.useState([]);
  // async function getInfo() {
  //   try {
  //     await axios
  //       .get("https://api.agroxizmatlar.uz/useful-link")
  //       .then((res) => setValue(res.data.items));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // React.useEffect(() => {
  //   getInfo();
  // }, []);
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>Hamkorlar</Title>
          <Cards>
            {uselink?.map((e) => (
              <NavLink key={e.id} to={e.link} target="_blank">
                <Card img={e.img} text={e.title} />
              </NavLink>
            ))}
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Links;
