import { list } from "../../constant/index";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Logo } from "../../assets/img/img";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between border-b pt-4 pb-2 border-gray-300">
          {/* Logo and burger */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <Link to={"/"}>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
                <h3 className="font-bold uppercase text-sm sm:text-base md:text-[16px] w-[200px] sm:w-[250px] lg:w-[300px] md:w-[300px]">
                  {t("header.title")}
                </h3>
              </div>
            </Link>

            {/* Burger icon — only shows on <lg */}
            <button onClick={toggleMenu} className="lg:hidden text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu — only lg and up */}
          <ul className="hidden lg:flex gap-[16px]">
            {list?.map((e) => (
              <li
                key={e.id}
                className="uppercase font-semibold text-sm lg:text-[16px]"
              >
                <Link to={`/${e.link}`}>{t(`nav.${e.name}`)}</Link>
              </li>
            ))}
          </ul>

          {/* Language switcher — only lg and up */}
          <div className="hidden lg:flex items-center gap-2">
            <img src={Globe} alt="Language" className="w-5 h-5" />
            <select
              className="border rounded px-1 py-0.5 text-sm"
              onChange={(e) => changeLang(e.target.value)}
              value={i18n.language.split("-")[0]}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="zh">中文</option>
              <option value="de">De</option>
              <option value="en">En</option>
            </select>
          </div>
        </div>

        {/* Mobile dropdown — only <lg */}
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-2">
              {list?.map((e) => (
                <li key={e.id} className="uppercase font-semibold text-sm px-2">
                  <Link to={`/${e.link}`} onClick={() => setIsOpen(false)}>
                    {t(`nav.${e.name}`)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 px-2">
              <img src={Globe} alt="Language" className="w-5 h-5" />
              <select
                className="border rounded px-1 py-0.5 text-sm"
                onChange={(e) => changeLang(e.target.value)}
                value={i18n.language.split("-")[0]}
              >
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
                <option value="zh">中文</option>
                <option value="de">De</option>
                <option value="en">En</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
