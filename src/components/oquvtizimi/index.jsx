import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Title = styled(animated.h1)`
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #454545;
  max-width: 100%;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 640px) {
    font-size: 30px;
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
    max-width: 500px;
  }
`;

const Text = styled(animated.p)`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  max-width: 100%;
  width: 100%;
  text-align: justify;

  @media (min-width: 640px) {
    font-size: 18px;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    max-width: 649px;
  }
`;

const content = {
  uz: {
    title: "O’quv tizimi haqida ma'lumot",
    text: "Shayxontohur tuman politexnikumida o‘quv jarayoni ilg‘or pedagogik texnologiyalar, zamonaviy kasb-hunar ta’limi standarti va amaliy ko‘nikmalarni shakllantirishga qaratilgan. Ta’lim quyidagi yo‘nalishlarda olib boriladi: Kasbiy-texnik yo‘nalishlar bo‘yicha nazariy va amaliy mashg‘ulotlar; Ishlab chiqarish ta’limi orqali malakali mutaxassislar tayyorlash; Talabalarning amaliyotini real sektor korxonalari bilan hamkorlikda tashkil etish; O‘quv jarayonida innovatsion texnologiyalar, multimedia va interaktiv usullardan foydalanish. O‘quv tizimimiz o‘quvchilarni bozor talabiga mos, malakali, kreativ fikrlovchi va mustaqil qaror qabul qila oladigan kadrlar sifatida yetishtirishga qaratilgan.",
  },
  en: {
    title: "About the Education System",
    text: "The educational process at the Shaykhontohur District Polytechnic is focused on advanced pedagogical technologies, modern vocational education standards, and the development of practical skills. Training is conducted in the following areas: theoretical and practical sessions in vocational-technical fields; training qualified specialists through industrial education; organizing student internships in collaboration with real sector enterprises; and applying innovative technologies, multimedia, and interactive methods in the learning process. Our education system aims to train market-oriented, skilled, creative, and independent professionals.",
  },
  ru: {
    title: "О системе образования",
    text: "Учебный процесс в Шайхантахурском районном политехникуме направлен на внедрение передовых педагогических технологий, современных стандартов профессионального образования и развитие практических навыков. Обучение проводится по следующим направлениям: теоретические и практические занятия по профессионально-техническим направлениям; подготовка квалифицированных специалистов через производственное обучение; организация практики студентов совместно с предприятиями реального сектора; использование инновационных технологий, мультимедиа и интерактивных методов в учебном процессе. Наша система образования направлена на подготовку квалифицированных, креативных и самостоятельных специалистов, отвечающих требованиям рынка.",
  },
  de: {
    title: "Über das Bildungssystem",
    text: "Der Bildungsprozess am Polytechnikum des Bezirks Shaykhontohur konzentriert sich auf moderne pädagogische Technologien, zeitgemäße berufliche Bildungsstandards und die Entwicklung praktischer Fähigkeiten. Die Ausbildung erfolgt in folgenden Bereichen: theoretischer und praktischer Unterricht in beruflich-technischen Fächern; Ausbildung qualifizierter Fachkräfte durch praxisnahes Lernen; Organisation von Praktika in Zusammenarbeit mit Unternehmen des realen Sektors; sowie Einsatz von innovativen Technologien, Multimedia und interaktiven Methoden. Unser Bildungssystem zielt darauf ab, marktorientierte, kreative und selbstständig denkende Fachkräfte auszubilden.",
  },
  zh: {
    title: "关于教学体系",
    text: "沙彦塔霍尔区理工学院的教学过程注重先进的教学技术、现代职业教育标准以及实践技能的培养。教育涵盖以下方向：职业技术方向的理论与实践课程；通过生产教学培养高素质专业人才；与实体企业合作安排学生实习；在教学过程中应用创新技术、多媒体和互动方法。我们的教学体系旨在培养符合市场需求、富有创造力并具备独立思考能力的专业人才。",
  },
};

export default function Oquvtizim() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "uz";
  const { title, text } = content[lang] || content["uz"];

  // Title uchun fade animatsiyasi
  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 120, friction: 14 },
  });

  // Text uchun fade animatsiyasi, 400ms kechikish bilan
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
          <Title style={titleSpring}>{title}</Title>
          <Text style={textSpring}>{text}</Text>
        </div>
      </div>
    </div>
  );
}
