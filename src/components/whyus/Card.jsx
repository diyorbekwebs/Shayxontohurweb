import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled.div`
  animation: ${fadeInUp} 0.8s ease forwards;
`;

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
    <AnimatedCard
      data-aos="fade-up"
      className="pt-[52px] px-[43px] w-[418px] pb-[21px] flex flex-col gap-[33px]"
      style={{
        boxShadow: "0px 3px 20px 0px #42424226",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "300px",
      }}
    >
      <T1>{text1}</T1>
      <T2>{text2}</T2>
    </AnimatedCard>
  );
}
