import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0%;
  color: #000;
`;

const Text = styled.p`
  max-width: 240px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0%;
  color: #333;
`;

const Gmail = styled(Text)`
  font-weight: 600;
  text-decoration: underline;
  color: #6c9b31;
`;

const Div = styled.div`
  width: 320px;
  height: 285px;
  padding: 32px 31px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  box-shadow: 0px 3px 20px 0px #42424226;
  border-radius: 10px;
`;

export default function Card({ text, text2, img, gmail }) {
  return (
    <Div>
      {text && <Title>{text}</Title>}
      {img && (
        <img
          className="w-[57px] h-[57px]"
          src={img}
          alt={text ? `icon - ${text}` : "icon"}
          width={57}
          height={57}
        />
      )}
      {text2 && <Text>{text2}</Text>}
      {gmail && <Gmail>{gmail}</Gmail>}
    </Div>
  );
}
