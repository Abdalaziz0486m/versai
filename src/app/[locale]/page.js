import { useLocale, useTranslations } from "next-intl";
import SeoHead from "@/components/seo/SeoHead";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <SeoHead
        title={
          isArabic ? "فيرساي | سجاد وتحف كلاسيكية" : "Versai | Rugs & Antiques"
        }
        description={
          isArabic
            ? "اكتشف تشكيلتنا الفاخرة من السجاد اليدوي والتحف الأصلية في متجر Versai."
            : "Discover our premium collection of handmade rugs and original antiques at Versai."
        }
        keywords={
          isArabic
            ? ["سجاد", "تحف", "ديكور", "سجاد يدوي", "versai"]
            : ["rugs", "antiques", "decor", "handmade rugs", "versai"]
        }
        image="/images/og-home.jpg"
      />
      <section className="container text-center my-5">
        <h1>{t("title")}</h1>
        <p>{t("about")}</p>
      </section>
    </>
  );
}
