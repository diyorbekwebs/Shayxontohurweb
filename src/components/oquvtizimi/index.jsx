import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #454545;
  max-width: 100%;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 640px) {
    font-size: 30px;
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
    max-width: 500px;
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  max-width: 100%;
  width: 100%;
  text-align: justify;

  @media (min-width: 640px) {
    font-size: 18px;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    max-width: 649px;
  }
`;

export default function Oquvtizim() {
  return (
    <div className="py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
          <Title>O’quv tizimi haqida ma'lumot</Title>
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
