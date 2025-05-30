import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { banners } from "../../constant/carusel/carusel";

export default function Page() {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const banner = banners.find((b) => String(b.id) === id);
  if (!banner) return <div className="text-center text-red-500 py-10">Banner not found</div>;

  const lang = i18n.language;
  const title = banner[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || banner.titleUz;
  const description = banner[`description${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || banner.descriptionUz;

  return (
    <div className="mb-[100px] mt-[20px]">
      <div className="container">
        <div>
          <Link  to="/" className="flex items-center text-black -600 hover:underline mb-[40px]">
            <ArrowLeft className="w-5 h-5 mr-1" />
            <span>Orqaga qaytish</span>
          </Link>

          <div className="flex items-center flex-col">
            <img
              src={banner.url}
              alt={title}
              className="w-[70%] h-64 md:h-96 object-cover border-2 border-none mb-6"
            />

            <h1 className="w-[90%] text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {title}
            </h1>

            <div
              className="w-[90%] text-gray-700 leading-relaxed space-y-4 text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
