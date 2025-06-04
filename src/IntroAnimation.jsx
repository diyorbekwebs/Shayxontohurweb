import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  uz: "Xush kelibsiz!",
  ru: "Добро пожаловать!",
  en: "Welcome!",
  de: "Willkommen!",
  zh: "欢迎！",
};

const getLangFromLocale = (locale) => {
  if (locale.startsWith("uz")) return "uz";
  if (locale.startsWith("ru")) return "ru";
  if (locale.startsWith("de")) return "de";
  if (locale.startsWith("zh")) return "zh";
  return "en"; // default
};

const IntroAnimation = () => {
  const [lang, setLang] = useState("en");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const locale = navigator.language || navigator.userLanguage;
    const detectedLang = getLangFromLocale(locale);
    setLang(detectedLang);

    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-white z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-green-700"
          >
            {translations[lang]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
