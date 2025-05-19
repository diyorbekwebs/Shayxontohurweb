import React from "react";
import styled from "styled-components";
const T1 = styled("h3")`
  font-weight: 600;
  font-size: 25px;
  line-height: 26px;
  letter-spacing: 0%;
`;
const T2 = styled("p")`
  width: 334px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0px;
`;
export default function Card({ text1, text2, background }) {
  return (
    <div
      className="pt-[52px] px-[43px]  pb-[21px] flex flex-col gap-[33px]"
      style={{
        boxShadow: "0px 3px 20px 0px #42424226",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "300px", // Bu yerga balandlik qo‘shildi
      }}
    >
      <T1>{text1}</T1>
      <T2>{text2}</T2>
    </div>
  );
}
