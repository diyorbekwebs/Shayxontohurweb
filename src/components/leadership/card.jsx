import React from "react";
import styled from "styled-components";
import { Aziz, Mail, Phone, Test } from "../../assets/img/img";
const Text1 = styled("h3")`
  width: 400px;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  /* text-align: center; */
  vertical-align: middle;
  /* background-color: red; */
`;
const Text2 = styled("p")`
  width: 650px;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0%;
  /* text-align: center; */
  color: #141414;
`;
const Text3 = styled("p")`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #474747;
  vertical-align: middle;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Btn = styled("div")`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  background: #76a43dab;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #fff;
`;
export default function Card({
  img,
  position,
  fullName,
  receptionTime,
  phone,
  email,
}) {
  return (
    <div className="flex flex bg-[#fff] gap-[50px] items-center pt-[16px] pb-[25px] pl-[17px] pr-[15px] rounded-[13px]">
      <img
        className="w-[250px] h-[300px] object-cover mb-[2px]"
        src={img}
        alt=""
      />

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[5px]">
          <Text2>{position}</Text2>
          <Text1>{fullName}</Text1>
          <div className="mb-[16px]">
            <Text2 className="mb-[5px]">
              <b>{receptionTime}</b>
            </Text2>
            <Text3>
              <img src={Phone} alt="" />
              {phone}
            </Text3>
            <Text3>
              <img src={Mail} alt="" />
              {email}
            </Text3>
          </div>
        </div>
        {/* <Btn>Murojaat</Btn> */}
      </div>
    </div>
  );
}
