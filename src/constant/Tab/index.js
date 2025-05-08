export const Tabs = [
  {
    id: 1,
    path: "/",
    lang: {
      uz: {
        text: "Bosh sahifa",
      },
      ru: {
        text: "Главная",
      },
      en: {
        text: "Home page",
      },
    },
  },
  {
    id: 2,
    path: "/agency",
    lang: {
      uz: {
        text: "Agentlik haqida",
      },
      ru: {
        text: "Об агентстве",
      },
      en: {
        text: "About agency",
      },
    },
  },
  {
    id: 4,
    path: "/infor",
    lang: {
      uz: {
        text: "Axborot xizmati",
      },
      ru: {
        text: "Пресс-релиз",
      },
      en: {
        text: "Press service",
      },
    },
  },
  {
    id: 9,
    path: "/media",
    lang: {
      uz: {
        text: "Mediateka",
      },
      ru: {
        text: "Медиатека",
      },
      en: {
        text: "Mediatheque",
      },
    },
  },
  {
    id: 5,
    path: "/docs",
    lang: {
      uz: {
        text: "Me’yoriy hujjatlar",
      },
      ru: {
        text: "Нормативы",
      },
      en: {
        text: "Regulatory documents",
      },
    },
  },
  {
    id: 6,
    path: "/opendata",
    lang: {
      uz: {
        text: "Ochiq ma'lumotlar",
      },
      ru: {
        text: "Открытые данные",
      },
      en: {
        text: "Open data",
      },
    },
  },
  {
    id: 7,
    text: "Online kredit",
    path: "/credit",
    lang: {
      uz: {
        text: "Online kredit",
      },
      ru: {
        text: "Онлайн кредит",
      },
      en: {
        text: "Online Credits",
      },
    },
  },
  {
    id: 8,
    path: "/contact",
    lang: {
      uz: {
        text: "Bog’lanish",
      },
      ru: {
        text: "Контакты",
      },
      en: {
        text: "contacts",
      },
    },
  },
];

export const ResTabs = [
  // {
  //   id: 1,
  //   path: "/",
  //   lang: {
  //     uz: {
  //       text: "Bosh sahifa",
  //     },
  //     ru: {
  //       text: "Главная",
  //     },
  //     en: {
  //       text: "Home page",
  //     },
  //   },
  // },
  {
    id: 2,
    path: "/agency",
    lang: {
      uz: {
        text: "Agentlik haqida",
      },
      ru: {
        text: "Об агентстве",
      },
      en: {
        text: "About agency",
      },
    },
    items: [
      {
        id: 1,
        path: "/agency",
        lang: {
          uz: {
            text: "Agentlik haqida",
          },
          ru: {
            text: "О агентстве",
          },
          en: {
            text: "About agency",
          },
        },
      },
      {
        id: 2,
        path: "/agency/leader",
        lang: {
          uz: {
            text: "Raxbariyat",
          },
          ru: {
            text: "Лидерство",
          },
          en: {
            text: "Leadership",
          },
        },
      },
      {
        id: 3,
        path: "/agency/centralapp",
        lang: {
          uz: {
            text: "Markaziy apparat",
          },
          ru: {
            text: "Центральный аппарат",
          },
          en: {
            text: "Central apparatus",
          },
        },
      },
      {
        id: 4,
        path: "/agency/territorial",
        lang: {
          uz: {
            text: "Hududiy bo’linmalar",
          },
          ru: {
            text: "Территориальные единицы",
          },
          en: {
            text: "Territorial units",
          },
        },
      },

      {
        id: 5,
        path: "/agency/def",
        lang: {
          uz: {
            text: "Xalqaro aloqalar",
          },
          ru: {
            text: "Международные связи",
          },
          en: {
            text: "International Relations",
          },
        },
      },
      {
        id: 6,
        path: "/agency/subsidies",
        lang: {
          uz: {
            text: "Subsiydalar",
          },
          ru: {
            text: "Субсидии",
          },
          en: {
            text: "Subsidies",
          },
        },
      },
      {
        id: 7,
        path: "/agency/vacancies",
        lang: {
          uz: {
            text: "Bo’sh ish o’rinlari",
          },
          ru: {
            text: "Вакансии",
          },
          en: {
            text: "Vacancies",
          },
        },
      },
      {
        id: 8,
        path: "/agency/grape",
        lang: {
          uz: {
            text: "Grape & gardens investment AJ",
          },
          ru: {
            text: "Инвестиции в виноград и сады AJ",
          },
          en: {
            text: "Grape & gardens investment AJ",
          },
        },
      },
    ],
  },
  {
    id: 4,
    path: "/infor",
    lang: {
      uz: {
        text: "Axborot xizmati",
      },
      ru: {
        text: "Пресс-релиз",
      },
      en: {
        text: "Press service",
      },
    },
    items: [
      {
        id: 1,
        lang: {
          uz: {
            text: "Korrupsiyaga qarshi kurashish",
          },
          en: {
            text: "Fight against corruption",
          },
          ru: {
            text: "Борьба с коррупцией",
          },
        },
        path: "/infor",
      },
      {
        id: 2,
        text: "",
        path: "/infor/news",
        lang: {
          uz: {
            text: "Yangiliklar",
          },
          en: {
            text: "News",
          },
          ru: {
            text: "Новости",
          },
        },
      },
      {
        id: 3,
        path: "/infor/event",
        lang: {
          uz: {
            text: "E'lonlar",
          },
          en: {
            text: "Events",
          },
          ru: {
            text: "События",
          },
        },
      },

      {
        id: 4,
        path: "/infor/announcements",
        lang: {
          uz: {
            text: "Tadbirlar",
          },
          en: {
            text: "Announcements",
          },
          ru: {
            text: "Объявления",
          },
        },
      },
      {
        id: 5,
        path: "/infor/static",
        lang: {
          uz: {
            text: "Statistika",
          },
          en: {
            text: "Statistics",
          },
          ru: {
            text: "Статистика",
          },
        },
      },
    ],
  },

  {
    id: 9,
    path: "/media",
    lang: {
      uz: {
        text: "Mediateka",
      },
      ru: {
        text: "Медиатека",
      },
      en: {
        text: "Mediatheque",
      },
    },
    items: [
      {
        id: 1,
        text: "Foto galereya",
        path: "/media",
        lang: {
          uz: {
            text: "Foto galereya",
          },
          ru: {
            text: "Фото галерея",
          },
          en: {
            text: "Photo gallery",
          },
        },
      },
      {
        id: 2,
        text: "Video galereya",
        path: "/media/video",
        lang: {
          uz: {
            text: "Video galereya",
          },
          ru: {
            text: "Видео галерея",
          },
          en: {
            text: "Video gallery",
          },
        },
      },
    ],
  },
  {
    id: 5,
    path: "/docs",
    lang: {
      uz: {
        text: "Me’yoriy hujjatlar",
      },
      ru: {
        text: "Нормативы",
      },
      en: {
        text: "Regulatory documents",
      },
    },
    items: [
      {
        id: 1,
        path: "/docs",
        lang: {
          uz: {
            text: "O’zbekiston Respublikasi Qonunlari",
          },
          ru: {
            text: "Законы Республики Узбекистан",
          },
          en: {
            text: "Laws of the Republic of Uzbekistan",
          },
        },
      },
      {
        id: 2,
        path: "/docs/2",
        lang: {
          uz: {
            text: "O’zbekiston Respublikasi Prezidentining farmon va qarorlari",
          },
          ru: {
            text: "Указы и постановления Президента Республики Узбекистан",
          },
          en: {
            text: "Decrees and decisions of the President of the Republic of Uzbekistan",
          },
        },
      },
      {
        id: 3,
        path: "/docs/3",
        lang: {
          uz: {
            text: "O’zbekiston Respublikasi Adliya vaziligida davlat ro’yxatidan o’tkazilgan va arxiv sohasiga oid boshqa me’yoriy-huquqiy hujjatlar",
          },
          ru: {
            text: "Государственно зарегистрированные документы в Министерстве юстиции Республики Узбекистан и другие нормативно-правовые документы, относящиеся к сфере архивного дела.",
          },
          en: {
            text: "State-registered documents at the Ministry of Justice of the Republic of Uzbekistan and other regulatory and legal documents related to the field of archives",
          },
        },
      },
      {
        id: 4,
        path: "/docs/4",
        lang: {
          uz: {
            text: "O’z kuchini yo’qotgan me’yoriy-huquqiy hujjatlar",
          },
          ru: {
            text: "Нормативно-правовые документы, утратившие силу",
          },
          en: {
            text: "Regulatory and legal documents that have lost their force",
          },
        },
      },
    ],
  },
  {
    id: 6,
    path: "/opendata",
    lang: {
      uz: {
        text: "Ochiq ma'lumotlar",
      },
      ru: {
        text: "Открытые данные",
      },
      en: {
        text: "Open data",
      },
    },
    items: [
      {
        path: "/opendata",
        lang: {
          uz: {
            text: "Byudjet qonunchiligi ma’lumotlari",
          },
          ru: {
            text: "Образовательные услуги",
          },
          en: {
            text: "Professional services",
          },
        },
      },
      {
        path: "/opendata/2",
        lang: {
          uz: {
            text: "PF - 6742",
          },
          ru: {
            text: "PF - 6742",
          },
          en: {
            text: "PF - 6742",
          },
        },
      },
      {
        path: "/opendata/3",
        lang: {
          uz: {
            text: "Tarkibidagi tashkilotlar",
          },
          ru: {
            text: "Организации включены",
          },
          en: {
            text: "Organizations included",
          },
        },
      },
    ],
  },
  {
    id: 7,
    text: "Online kredit",
    path: "/credit",
    lang: {
      uz: {
        text: "Online kredit",
      },
      ru: {
        text: "Онлайн кредит",
      },
      en: {
        text: "Online Credits",
      },
    },
    items: [
      {
        path: "/credit",
        lang: {
          uz: {
            text: "Kredit olish",
          },
          ru: {
            text: "Получить ссуду",
          },
          en: {
            text: "Obtaining a loan",
          },
        },
      },
      {
        path: "/credit/2",
        lang: {
          uz: {
            text: "Subsiyda olish",
          },
          ru: {
            text: "Субсидия",
          },
          en: {
            text: "Subsidy",
          },
        },
      },
    ],
  },
  {
    id: 8,
    lang: {
      uz: {
        text: "Bog’lanish",
      },
      ru: {
        text: "Контакты",
      },
      en: {
        text: "contacts",
      },
    },
    items: [
      {
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
    ],
  },
];
