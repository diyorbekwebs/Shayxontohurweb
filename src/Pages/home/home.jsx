import React from "react";
import { Helmet } from "react-helmet-async";
import { Carusel } from "../../components/carusel/Carusel";
import Yonalishlar from "../../components/yonalishlar/yonalishlar";
import Oquvtizim from "../../components/oquvtizimi/index";
import Card from "../../components/statistics/Card";
import History from "../../components/history/history";
import Whyus from "../../components/whyus/index";
import Contact from "../../components/contact/index";
import Links from "../../components/links/Links";
import ScrollToTopButton from "../../components/scroll";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shayxontohur tuman politexnikumi | Rasmiy sayt</title>
        <meta
          name="description"
          content="Shayxontohur tuman politexnikumi haqida to‘liq ma’lumot. Yo‘nalishlar, o‘quv tizimi, tarix, aloqalar va boshqa muhim ma’lumotlar."
        />
        <meta
          name="keywords"
          content="Shayxontohur politexnikumi, texnikum, kollej, o‘quv markazi, ta’lim, yo‘nalishlar, Toshkent politexnikum"
        />
        <meta name="author" content="Shayxontohur tuman politexnikumi" />
        
        {/* Open Graph teglari (Facebook va boshqalar uchun) */}
        <meta property="og:title" content="Shayxontohur tuman politexnikumi" />
        <meta
          property="og:description"
          content="Rasmiy veb-sayt: Yo‘nalishlar, ta’lim tizimi, tarix va bog‘lanish imkoniyatlari."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.uz/" />
        <meta property="og:image" content="https://your-domain.uz/og-image.jpg" />

        {/* Twitter uchun */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shayxontohur tuman politexnikumi" />
        <meta
          name="twitter:description"
          content="Rasmiy sayt - ta’lim yo‘nalishlari va bog‘lanish imkoniyatlari."
        />
        <meta name="twitter:image" content="https://your-domain.uz/og-image.jpg" />
      </Helmet>

      <Carusel />
      <Yonalishlar />
      <Oquvtizim />
      {/* <Card /> */}
      <History />
      <Whyus />
      <Contact />
      <Links />
      <ScrollToTopButton />
    </>
  );
}
