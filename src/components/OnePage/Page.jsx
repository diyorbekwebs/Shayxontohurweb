import { useParams, Link } from "react-router-dom";
import { banners } from "../constant/banner";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const banner = banners.find((b) => String(b.id) === id);
  if (!banner) return <div className="text-center text-red-500 py-10">Banner not found</div>;

  const lang = i18n.language;
  const title = banner[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || banner.titleUz;
  const description = banner[`description${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || banner.descriptionUz;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <Link to="/" className="flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="w-5 h-5 mr-1" />
        <span>Orqaga qaytish</span>
      </Link>

      <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200">
        <img
          src={banner.url}
          alt={title}
          className="w-full h-64 md:h-96 object-cover rounded-xl border-2 border-blue-400 mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {title}
        </h1>

        <div
          className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
