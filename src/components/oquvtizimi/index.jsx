import React from "react";
import styled from "styled-components";
const Title = styled("h1")`
  font-family: Manrope;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: 0%;
  width: 335px;
`;
const Text = styled("p")`
  font-family: Manrope;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0%;
  width: 649px;
`;
export default function Oquvtizim() {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-start mb-[80px]">
          <Title>O’quv tizimi haqida malumot</Title>
          <Text>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
            <br />
            <br />
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </Text>
        </div>
      </div>
    </div>
  );
}
