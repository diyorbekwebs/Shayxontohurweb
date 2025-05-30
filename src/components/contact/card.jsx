import React from "react";
import styled from "styled-components";

const Title = styled("h3")`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0%;
`;
const Text = styled("p")`
  width: 240px;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0%;
`;
const Div = styled("div")`
  width: 320;
  height: 285;
  padding: 32px 31px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
`;
const Gmail = styled(Text)`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0%;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-offset: 0%;
  text-decoration-thickness: 0%;
  color: #6c9b31;
`;
export default function Card({ text, text2, img, gmail }) {
  return (
    <Div style={{ boxShadow: "0px 3px 20px 0px #42424226"}}>
      <Title>{text}</Title>
      <img className="w-[57px] h-[57px]" src={img} alt="" />
      <Text>{text2}</Text>
      <Gmail>{gmail || ""}</Gmail>
    </Div>
  );
}
