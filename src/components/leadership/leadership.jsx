import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Card from "./card";
import { Leader } from "../../constant/leadership";

const Title = styled("h1")`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1%;
  text-transform: uppercase;
`;

export default function Staffs() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "uz";

  return (
    <div className="bg-[#F5F3EF] pt-[40px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[30px]">
          <Title>RAHBARIYAT</Title>
          <div className="w-full flex items-start flex-col gap-[29px] flex-wrap">
            {Leader.map((person) => (
              <Card
                key={person.id}
                img={person.img}
                position={person.position[lang]}
                fullName={person.fullName[lang]}
                receptionTime={person.receptionTime[lang]}
                phone={person.phone}
                email={person.email}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
