import React from "react";
import styled from "styled-components";
import { Test } from "../../assets/img/img";
const Title = styled("h1")`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;
const Text = styled("p")`
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0%;
  width: 649px;
`;
const Btn = styled("div")`
  background: #e2ebd6;
  width: 251.0549774169922;
  height: 67;
  padding: 22px 43px;
  border-radius: 10px;
  color: #55a630;
  font-weight: 500;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0%;
`;
export default function History() {
  return (
    <div className="mb-[150px] mt-[55px]">
      <div className="container">
        <div className="flex flex-col gap-[34px]">
          <Title>Politexnikum tarixi</Title>
          <div className="flex items-start gap-[50px]">
            <img className="w-[641px] h-[481px] rounded-[10px]" src={Test} alt="" />
            <div className="flex h-[100%] flex-col gap-[38px] items-start">
              <Text>
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют.
                <br />
                <br />
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </Text>
              <Btn>Подробнее</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
