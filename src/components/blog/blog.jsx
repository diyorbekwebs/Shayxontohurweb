import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const data = {
  uz: {
    subtitle: "Blog — 2025-2026 o'quv yili",
    categories: ["Dasturlar", "Ta'limga oid", "Pedagogik kengash"],
    back: "← Orqaga",
    noData: "Hozircha ma'lumot yo'q.",
    pedagogikTitle: "Pedagogik kengash bayonnomalar",
    participants: (n) => `👥 ${n} nafar qatnashdi`,
    typeAnnual: "Yillik",
    typeExtra: "Navbatdan tashqari",
    posts: [
      { id: 1, title: "Bayonnoma №1", description: "O'quv yilini boshlash, kengash a'zolarini saylash, yillik ish rejalarini tasdiqlash", participants: 57, type: "Yillik" },
      { id: 2, title: "Bayonnoma №2", description: "Asosiy vositalar (kompyuter, printer, televizor, proyektor, noutbuk) hisobdan chiqarish", participants: 55, type: "Navbatdan tashqari" },
      { id: 4, title: "Bayonnoma №4", description: "Umumta'lim fanlari kafedrasi hisoboti, yoshlar bilan ishlash, xo'jalik mudiri faoliyati", participants: 60, type: "Yillik" },
      { id: 6, title: "Bayonnoma №6", description: "Avtomobillar kafedrasi tahlili, pedagogik yuklamalar bajarilishi", participants: 60, type: "Yillik" },
      { id: 7, title: "Bayonnoma №7", description: "I yarim yillik yakuni, attestatsiya, amaliyot shartnomalari hisoboti", participants: 65, type: "Navbatdan tashqari" },
      { id: 8, title: "Bayonnoma №8", description: "Barcha bo'limlar yig'ma hisoboti, Turin universitetiga biriktirilish, Navro'z tayyorgarligi", participants: 65, type: "Yillik" },
    ],
  },
  ru: {
    subtitle: "Блог — 2025-2026 учебный год",
    categories: ["Программы", "Об образовании", "Педагогический совет"],
    back: "← Назад",
    noData: "Данных пока нет.",
    pedagogikTitle: "Протоколы педагогического совета",
    participants: (n) => `👥 ${n} участников`,
    typeAnnual: "Ежегодный",
    typeExtra: "Внеплановый",
    posts: [
      { id: 1, title: "Протокол №1", description: "Начало учебного года, выборы членов совета, утверждение годовых планов работы", participants: 57, type: "Ежегодный" },
      { id: 2, title: "Протокол №2", description: "Списание основных средств (компьютеры, принтеры, телевизоры, проекторы, ноутбуки)", participants: 55, type: "Внеплановый" },
      { id: 4, title: "Протокол №4", description: "Отчёт кафедры общеобразовательных предметов, работа с молодёжью, деятельность завхоза", participants: 60, type: "Ежегодный" },
      { id: 6, title: "Протокол №6", description: "Анализ кафедры автомобилей, выполнение педагогической нагрузки", participants: 60, type: "Ежегодный" },
      { id: 7, title: "Протокол №7", description: "Итоги первого полугодия, аттестация, отчёт по договорам практики", participants: 65, type: "Внеплановый" },
      { id: 8, title: "Протокол №8", description: "Сводный отчёт всех отделов, прикрепление к Туринскому университету, подготовка к Наврузу", participants: 65, type: "Ежегодный" },
    ],
  },
  zh: {
    subtitle: "博客 — 2025-2026学年",
    categories: ["课程", "教育相关", "教育委员会"],
    back: "← 返回",
    noData: "暂无数据。",
    pedagogikTitle: "教育委员会会议记录",
    participants: (n) => `👥 ${n} 名参与者`,
    typeAnnual: "年度",
    typeExtra: "临时",
    posts: [
      { id: 1, title: "会议记录 №1", description: "开学、选举委员会成员、批准年度工作计划", participants: 57, type: "年度" },
      { id: 2, title: "会议记录 №2", description: "报废主要资产（电脑、打印机、电视、投影仪、笔记本电脑）", participants: 55, type: "临时" },
      { id: 4, title: "会议记录 №4", description: "普通教育学科系汇报、青年工作、总务主任工作", participants: 60, type: "年度" },
      { id: 6, title: "会议记录 №6", description: "汽车系分析、教学负荷完成情况", participants: 60, type: "年度" },
      { id: 7, title: "会议记录 №7", description: "上半学年总结、教师资格认定、实习合同汇报", participants: 65, type: "临时" },
      { id: 8, title: "会议记录 №8", description: "所有部门综合汇报、与都灵大学合作、诺鲁孜节准备", participants: 65, type: "年度" },
    ],
  },
  de: {
    subtitle: "Blog — Schuljahr 2025-2026",
    categories: ["Programme", "Bildungsbezogen", "Pädagogischer Rat"],
    back: "← Zurück",
    noData: "Noch keine Daten.",
    pedagogikTitle: "Protokolle des Pädagogischen Rates",
    participants: (n) => `👥 ${n} Teilnehmer`,
    typeAnnual: "Jährlich",
    typeExtra: "Außerplanmäßig",
    posts: [
      { id: 1, title: "Protokoll №1", description: "Schuljahresbeginn, Wahl der Ratsmitglieder, Genehmigung der Jahresarbeitspläne", participants: 57, type: "Jährlich" },
      { id: 2, title: "Protokoll №2", description: "Abschreibung von Anlagevermögen (Computer, Drucker, Fernseher, Projektoren, Laptops)", participants: 55, type: "Außerplanmäßig" },
      { id: 4, title: "Protokoll №4", description: "Bericht der Allgemeinbildungsabteilung, Jugendarbeit, Tätigkeit des Hausmeisters", participants: 60, type: "Jährlich" },
      { id: 6, title: "Protokoll №6", description: "Analyse der Automobilabteilung, Erfüllung der Lehrbelastung", participants: 60, type: "Jährlich" },
      { id: 7, title: "Protokoll №7", description: "Halbjahresergebnisse, Attestierung, Bericht über Praktikumsverträge", participants: 65, type: "Außerplanmäßig" },
      { id: 8, title: "Protokoll №8", description: "Gesamtbericht aller Abteilungen, Anbindung an Turiner Universität, Nowruz-Vorbereitung", participants: 65, type: "Jährlich" },
    ],
  },
  en: {
    subtitle: "Blog — 2025-2026 Academic Year",
    categories: ["Programs", "Education Related", "Pedagogical Council"],
    back: "← Back",
    noData: "No data available yet.",
    pedagogikTitle: "Pedagogical Council Minutes",
    participants: (n) => `👥 ${n} participants`,
    typeAnnual: "Annual",
    typeExtra: "Extraordinary",
    posts: [
      { id: 1, title: "Minutes №1", description: "Start of academic year, election of council members, approval of annual work plans", participants: 57, type: "Annual" },
      { id: 2, title: "Minutes №2", description: "Write-off of fixed assets (computers, printers, TVs, projectors, laptops)", participants: 55, type: "Extraordinary" },
      { id: 4, title: "Minutes №4", description: "Report of General Education Department, youth work, household manager activities", participants: 60, type: "Annual" },
      { id: 6, title: "Minutes №6", description: "Analysis of Automotive Department, teaching load fulfillment", participants: 60, type: "Annual" },
      { id: 7, title: "Minutes №7", description: "First half-year results, attestation, internship contract report", participants: 65, type: "Extraordinary" },
      { id: 8, title: "Minutes №8", description: "Summary report of all departments, affiliation with Turin University, Nowruz preparation", participants: 65, type: "Annual" },
    ],
  },
};

const files = {
  1: "/Pedagogik kengash №1.pdf",
  2: "/Pedagogik kengash №2.pdf",
  4: "/Pedagogik kengash №4.pdf",
  6: "/Pedagogik kengash №6.pdf",
  7: "/Pedagogik kengash №7.pdf",
  8: "/Pedagogik kengash №8.pdf",
};

export default function Blog() {
  const { i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [lang, setLang] = useState(i18n.language.split("-")[0]);

  useEffect(() => {
    const handleLangChange = (lng) => {
      setLang(lng.split("-")[0]);
      setActiveCategory(null);
    };
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, [i18n]);

  const t = data[lang] || data["uz"];

  const handleBack = () => setActiveCategory(null);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem", fontFamily: "sans-serif", color: "#1a2810", marginBottom: "250px" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "0.25rem", color: "#4a6e1f" }}>
        Shayxontohur tuman texnikumi
      </h1>
      <p style={{ color: "#5a7040", marginBottom: "2rem", fontSize: "14px" }}>
        {t.subtitle}
      </p>

      {/* Category list */}
      {!activeCategory && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {t.categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: "#fff",
                border: "1px solid #d4e8b0",
                borderRadius: "10px",
                padding: "1.2rem 1.5rem",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f3fae6"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}
            >
              <span style={{ fontWeight: 600, fontSize: "16px" }}>{cat}</span>
              <span style={{ color: "#6c9b31", fontSize: "18px" }}>›</span>
            </div>
          ))}
        </div>
      )}

      {/* Pedagogik kengash */}
      {activeCategory === t.categories[2] && (
        <div>
          <button onClick={handleBack} style={{ background: "none", border: "none", color: "#6c9b31", cursor: "pointer", fontSize: "14px", marginBottom: "1rem", padding: 0, fontWeight: 600 }}>
            {t.back}
          </button>
          <h2 style={{ fontSize: "1.2rem", color: "#4a6e1f", marginBottom: "1.25rem" }}>
            {t.pedagogikTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {t.posts.map((post) => (
              <div
                key={post.id}
                style={{
                  background: "#fff",
                  border: "1px solid #d4e8b0",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "20px",
                    background: post.type === t.typeAnnual ? "#e8f3d6" : "#fff3e0",
                    color: post.type === t.typeAnnual ? "#4a6e1f" : "#a05e00",
                    display: "inline-block", marginBottom: "6px",
                  }}>
                    {post.type}
                  </span>
                  <div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>{post.title}</div>
                  <div style={{ fontSize: "13px", color: "#5a7040", marginBottom: "6px" }}>{post.description}</div>
                  <div style={{ fontSize: "12px", color: "#888" }}>{t.participants(post.participants)}</div>
                </div>
                <a
                  href={files[post.id]}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block", padding: "8px 16px", background: "#6c9b31",
                    color: "#fff", borderRadius: "8px", textDecoration: "none",
                    fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0,
                  }}
                >
                  PDF ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dasturlar */}
      {activeCategory === t.categories[0] && (
        <div>
          <button onClick={handleBack} style={{ background: "none", border: "none", color: "#6c9b31", cursor: "pointer", fontSize: "14px", marginBottom: "1rem", padding: 0, fontWeight: 600 }}>
            {t.back}
          </button>
          <h2 style={{ fontSize: "1.2rem", color: "#4a6e1f", marginBottom: "1.25rem" }}>{t.categories[0]}</h2>
          <p style={{ color: "#5a7040", fontSize: "14px" }}>{t.noData}</p>
        </div>
      )}

      {/* Ta'limga oid */}
      {activeCategory === t.categories[1] && (
        <div>
          <button onClick={handleBack} style={{ background: "none", border: "none", color: "#6c9b31", cursor: "pointer", fontSize: "14px", marginBottom: "1rem", padding: 0, fontWeight: 600 }}>
            {t.back}
          </button>
          <h2 style={{ fontSize: "1.2rem", color: "#4a6e1f", marginBottom: "1.25rem" }}>{t.categories[1]}</h2>
          <p style={{ color: "#5a7040", fontSize: "14px" }}>{t.noData}</p>
        </div>
      )}
    </div>
  );
}