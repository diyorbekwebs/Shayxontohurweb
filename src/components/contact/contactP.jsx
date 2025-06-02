import React from "react";
import Contact from ".";
import { contactdb } from "../../constant/contact";
import Card from "./card";
import { useTranslation } from "react-i18next";

export default function ContactP() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "uz";

  return (
    <section
      className="mt-[30px]"
      aria-labelledby="contact-section-title"
    >
      <div className="container">
        <div className="flex flex-col gap-[50px]">
          <h2 id="contact-section-title" className="sr-only">
            {t("contact.sectionTitle") || "Aloqa bo‘limi"}
          </h2>

          <div
            className="flex gap-[15px]"
            role="list"
            aria-label={t("contact.cards") || "Aloqa kartalari"}
          >
            {contactdb.map((e) => (
              <article key={e.id} role="listitem">
                <Card
                  text={e.title[lang]}
                  text2={e.text ? e.text[lang] : undefined}
                  gmail={e.gmail ? e.gmail[lang] : undefined}
                  img={e.img}
                />
              </article>
            ))}
          </div>

          <div aria-label={t("contact.formTitle") || "Aloqa formasi"}>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}
