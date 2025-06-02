import React from "react";
import styled, { keyframes } from "styled-components";
import { AlertCircle } from "lucide-react"; // yoki boshqa icon kutubxona

const Banner = styled.div`
  position: fixed;
  top: 40%;
  right: 0;
  transform: rotate(-90deg) translateY(-100%);
  transform-origin: right top;
  background-color: #ffce00;
  color: #000;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px 8px 0 0;
  z-index: 9999;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default function TestBanner() {
  return (
    <Banner>
      <AlertCircle size={16} />
      Sayt test rejimda
    </Banner>
  );
}
