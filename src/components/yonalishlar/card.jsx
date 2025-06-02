import React from "react";
import { TopVec } from "../../assets/img/img";
import styled from "styled-components";
import { motion } from "framer-motion";

const T1 = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0%;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;

export default function Card({ title, img, date }) {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:gap-[29px] w-full max-w-[417px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[304px] object-cover rounded-[10px]"
        src={img}
        alt={title}
      />

      <div className="flex w-full justify-between items-start">
        <T1>{title}</T1>
        <img src={TopVec} alt="arrow" className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* <p className="text-sm text-gray-500">{date}</p> */}
    </motion.div>
  );
}
