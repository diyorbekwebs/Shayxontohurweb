import {
  BarIcon,
  BarIcon1,
  BarIcon10,
  BarIcon11,
  BarIcon12,
  BarIcon13,
  BarIcon14,
  BarIcon15,
  BarIcon16,
  BarIcon17,
  BarIcon18,
  BarIcon2,
  BarIcon3,
  BarIcon4,
  BarIcon5,
  BarIcon6,
  BarIcon7,
  BarIcon8,
  BarIcon9,
} from "../../assets/imgs/img.js";

export const allmenubar = [
  {
    id: 1,
    title: "Agentlik",
    items: [
      { text: "Agentlik haqida", img: BarIcon, path: "agency" },
      { text: "Rahbariyat", img: BarIcon1, path: "/agency/leader" },
      { text: "Markaziy apparat", img: BarIcon2, path: "/agency/centralapp" },
      {
        text: "Hududiy bo’linmalar",
        img: BarIcon3,
        path: "/agency/territorial",
      },
      // { text: "Xalqaro aloqalar", img: BarIcon4, path: "international" }, //yoq
      { text: "Aloqa vositalari", img: BarIcon5, path: "contact" },
      { text: "Normativ hujjatlar", img: BarIcon6, path: "docs" },
      { text: "Ochiq ma’lumotlar", img: BarIcon6, path: "opendata" },
    ],
  },

  {
    id: 3,
    title: "Axborot xizmati",
    items: [
      { text: "Yangiliklar", img: BarIcon9, path: "/infor/news" },
      { text: "E'lonlar", img: BarIcon10, path: "vacancy" },
      { text: "Tadbirlar", img: BarIcon11, path: "/infor/announcements" },
      {
        text: "Bo'sh ish o'rinlari",
        img: BarIcon12,
        path: "/agency/vacancies",
      },
      { text: "Mediagalereya", img: BarIcon13, path: "media" }, //hisob
      { text: "Statistika", img: BarIcon14, path: "/infor/static" },
    ],
  },
  {
    id: 2,
    title: "Subsiyda va kredit",
    items: [
      { text: "Subsiyda", img: BarIcon7, path: "credit/2" }, //yoq
      { text: "Online kredit", img: BarIcon8, path: "credit" }, //yoq
    ],
  },
];
