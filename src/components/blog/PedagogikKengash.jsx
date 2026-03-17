import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Bayonnoma №1",
    description: "O'quv yilini boshlash, kengash a'zolarini saylash, yillik ish rejalarini tasdiqlash",
    participants: 57,
    type: "Yillik",
    file: "Pedagogik_kengash__1.pdf",
  },
  {
    id: 2,
    title: "Bayonnoma №2",
    description: "Asosiy vositalar (kompyuter, printer, televizor, proyektor, noutbuk) hisobdan chiqarish",
    participants: 55,
    type: "Navbatdan tashqari",
    file: "Pedagogik_kengash__2.pdf",
  },
  {
    id: 4,
    title: "Bayonnoma №4",
    description: "Umumta'lim fanlari kafedrasi hisoboti, yoshlar bilan ishlash, xo'jalik mudiri faoliyati",
    participants: 60,
    type: "Yillik",
    file: "Pedagogik_kengash__4.pdf",
  },
  {
    id: 6,
    title: "Bayonnoma №6",
    description: "Avtomobillar kafedrasi tahlili, pedagogik yuklamalar bajarilishi",
    participants: 60,
    type: "Yillik",
    file: "Pedagogik_kengash__6.pdf",
  },
  {
    id: 7,
    title: "Bayonnoma №7",
    description: "I yarim yillik yakuni, attestatsiya, amaliyot shartnomalari hisoboti",
    participants: 65,
    type: "Navbatdan tashqari",
    file: "Pedagogik_kengash__7.pdf",
  },
  {
    id: 8,
    title: "Bayonnoma №8",
    description: "Barcha bo'limlar yig'ma hisoboti, Turin universitetiga biriktirilish, Navro'z tayyorgarligi",
    participants: 65,
    type: "Yillik",
    file: "Pedagogik_kengash__8.pdf",
  },
];

 function PedagogikKengash() {
  const [filter, setFilter] = useState("Barchasi");

  const types = ["Barchasi", "Yillik", "Navbatdan tashqari"];

  const filtered =
    filter === "Barchasi" ? posts : posts.filter((p) => p.type === filter);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem", fontFamily: "sans-serif", color: "#1a2810" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "0.25rem", color: "#4a6e1f" }}>
        Ilmiy Pedagogik Kengash
      </h1>
      <p style={{ color: "#5a7040", marginBottom: "1.5rem", fontSize: "14px" }}>
        Shayxontohur tuman texnikumi — 2025-2026 o'quv yili · Rais: G.Q.Yusupova
      </p>

      {/* Filter buttons */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid #6c9b31",
              background: filter === t ? "#6c9b31" : "#fff",
              color: filter === t ? "#fff" : "#6c9b31",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.map((post) => (
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: "20px",
                    background: post.type === "Yillik" ? "#e8f3d6" : "#fff3e0",
                    color: post.type === "Yillik" ? "#4a6e1f" : "#a05e00",
                  }}
                >
                  {post.type}
                </span>
              </div>
              <div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>
                {post.title}
              </div>
              <div style={{ fontSize: "13px", color: "#5a7040", marginBottom: "6px" }}>
                {post.description}
              </div>
              <div style={{ fontSize: "12px", color: "#888" }}>
                👥 {post.participants} nafar qatnashdi
              </div>
            </div>
            <a
              href={post.file}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#6c9b31",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              PDF ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PedagogikKengash;