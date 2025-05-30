import React from "react";
import { list } from "../../constant/index";
import { Link } from "react-router-dom";
import { Globe, Logo } from "../../assets/img/img";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container">
        <div
          className="flex items-center justify-between border-b pt-[30px] pb-[10px]"
          style={{ borderBottomColor: "#a3a3a380" }}
        >
          <div className="flex items-center gap-[73px]">
            <div className="flex items-center gap-[10px]">
              <img src={Logo} alt="Logo" />
              <h3 className="font-bold text-[14px] w-[260px]">{t("header.title")}</h3>
            </div>
            <ul className="flex gap-[16px]">
              {list?.map((e) => (
                <li key={e.id} className="text-[16px]">
                  <Link to={`/${e.link}`}>{t(`nav.${e.name}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <img src={Globe} alt="Language" />
            <select
              className="border rounded px-1 py-0.5 text-sm"
              onChange={(e) => changeLang(e.target.value)}
              value={i18n.language.split("-")[0]} // faqat til qismini olish uchun
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="zh">中文</option>
              <option value="de">De</option>
              <option value="en">En</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
