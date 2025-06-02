import React from "react";
import Contact from ".";
import { contactdb } from "../../constant/contact";
import Card from "./card";
import { useTranslation } from "react-i18next";

export default function ContactP() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "uz"; // fallback til

  return (
    <div className="mt-[30px]">
      <div className="container">
        <div className="flex flex-col gap-[50px]">
          <div className="flex gap-[16px] flex-wrap">
            {contactdb.map((e) => (
              <Card
                key={e.id}
                text={e.title[lang]}
                text2={e.text ? e.text[lang] : undefined}
                gmail={e.gmail ? e.gmail[lang] : undefined}
                img={e.img}
              />
            ))}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
