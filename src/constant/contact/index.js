import {
  CMail,
  CMap,
  Calendar2,
  Calling,
  Headphones,
} from "../../assets/imgs/img";

export const contactdb = [
  {
    id: 1,
    title: "Адресс:",
    img: CMap,
    text: "Тошкент шаҳри, Содиқ Азимов кўчаси, 42, 100000.",
  },
  {
    id: 2,
    title: "Телефон",
    img: Calling,
    text: "+998 95 450-59-50",
  },
  {
    id: 3,
    title: "Электронная почта:",
    img: CMail,
    gmail: "garden@agro.uz",
  },
  {
    id: 4,
    title: "Call-center",
    img: Headphones,
    text: "(95) 450-59-50 1342",
  },
  {
    id: 5,
    title: "Ish tartibi",
    img: Calendar2,
    text: "Dushanba–Juma08:30 dan 17:30 gacha.",
  },
];

export const contactBar = [
  {
    id: 1,
    path: "/contact",
    lang: {
      uz: {
        text: "Agentlik",
      },
      ru: {
        text: "Агентство",
      },
      en: {
        text: "Agency",
      },
    },
  },
  {
    id: 2,
    path: "/contact/2",
    lang: {
      uz: {
        text: "Bo’linmalar",
      },
      ru: {
        text: "Подразделения",
      },
      en: {
        text: "Divisions",
      },
    },
  },
];
