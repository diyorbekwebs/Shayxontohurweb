import React, { useState, useRef, useEffect } from "react";
import { list } from "../../constant/index";
import { Link, useLocation } from "react-router-dom";
import { Globe, Logo } from "../../assets/img/img";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef(null);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Hozirgi pathni olish
  const currentPath = location.pathname;

  // Tashqariga bosilganda til dropdownini yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Til variantlari
  const languages = [
    { code: "uz", label: "Uz" },
    { code: "ru", label: "Ru" },
    { code: "zh", label: "中文" },
    { code: "de", label: "De" },
    { code: "en", label: "En" },
  ];

  const selectedLang = i18n.language.split("-")[0];
  const selectedLabel = languages.find((l) => l.code === selectedLang)?.label;

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm" role="banner">
      <div className="container">
        <div className="flex items-center justify-between border-b pt-4 pb-2 border-gray-300">
          {/* Logo and burger */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <Link to={"/"} aria-label="Asosiy sahifaga qaytish">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <img
                  src={Logo}
                  alt="Shayxontohur tuman politexnikumi logotipi"
                  className="w-10 sm:w-[150px]"
                />
                <span className="font-bold uppercase text-sm sm:text-base md:text-[16px] w-[200px] sm:w-[250px] lg:w-[300px] md:w-[300px]">
                  {t("header.title")}
                </span>
              </div>
            </Link>

            {/* Burger icon — only shows on <lg */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-800"
              aria-label="Mobil menyuni ochish"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu — only lg and up */}
          <nav
            className="hidden lg:flex gap-[16px]"
            role="navigation"
            aria-label="Asosiy menyu"
          >
            {list?.map((e) => {
              const isActive =
                currentPath === `/${e.link}` ||
                (e.link === "" && currentPath === "/");
              return (
                <li
                  key={e.id}
                  className={`list-none uppercase font-semibold text-sm lg:text-[16px] ${
                    isActive
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  <Link to={`/${e.link}`}>{t(`nav.${e.name}`)}</Link>
                </li>
              );
            })}
          </nav>

          {/* Custom language dropdown — only lg and up */}
          <div
            className="hidden lg:flex items-center gap-2 relative"
            ref={dropdownRef}
          >
            <img src={Globe} alt="Tilni tanlash" className="w-5 h-5" />
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="flex items-center justify-between w-[120px] border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition cursor-pointer"
              aria-haspopup="true"
              aria-expanded={langDropdownOpen}
              aria-label="Tilni tanlash"
            >
              <span>{selectedLabel}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langDropdownOpen && (
              <ul
                className="absolute top-full left-0 mt-1 w-[120px] rounded-md bg-white shadow-lg border border-gray-200 z-50"
                role="menu"
                aria-orientation="vertical"
              >
                {languages.map(({ code, label }) => (
                  <li
                    key={code}
                    role="menuitem"
                    onClick={() => changeLang(code)}
                    className={`cursor-pointer px-4 py-2 text-sm hover:bg-green-500 hover:text-white transition ${
                      code === selectedLang
                        ? "bg-green-600 text-white font-semibold"
                        : "text-gray-800"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile dropdown — only <lg */}
        {isOpen && (
          <nav
            className="lg:hidden flex flex-col gap-2 py-4 border-t border-gray-200 bg-white shadow-md rounded-b-md"
            role="navigation"
            aria-label="Mobil menyu"
          >
            <ul className="flex flex-col gap-1 px-4">
              {list?.map((e) => {
                const isActive =
                  currentPath === `/${e.link}` ||
                  (e.link === "" && currentPath === "/");
                return (
                  <li
                    key={e.id}
                    className={`uppercase font-semibold text-sm py-2 px-3 rounded-md cursor-pointer transition-colors ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    <Link
                      to={`/${e.link}`}
                      onClick={() => setIsOpen(false)}
                      className="block w-full"
                    >
                      {t(`nav.${e.name}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Custom language dropdown */}
            <div
              className="flex items-center gap-2 px-4 pt-4 border-t border-gray-200 relative"
              ref={dropdownRef}
            >
              <img src={Globe} alt="Tilni tanlash" className="w-5 h-5" />
              <button
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className="flex items-center justify-between w-[120px] border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition cursor-pointer"
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
                aria-label="Tilni tanlash"
              >
                <span>{selectedLabel}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langDropdownOpen && (
                <ul
                  className="absolute top-full left-0 mt-1 w-[120px] rounded-md bg-white shadow-lg border border-gray-200 z-50"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {languages.map(({ code, label }) => (
                    <li
                      key={code}
                      role="menuitem"
                      onClick={() => {
                        changeLang(code);
                        setIsOpen(false); // menyuni ham yopish (mobilda)
                      }}
                      className={`cursor-pointer px-4 py-2 text-sm hover:bg-green-500 hover:text-white transition ${
                        code === selectedLang
                          ? "bg-green-600 text-white font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
