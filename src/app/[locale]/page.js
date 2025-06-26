import { useLocale, useTranslations } from "next-intl";
import SeoHead from "@/components/seo/SeoHead";
import AdBanner from "@/components/home/AdBanner";
import Hero from "@/components/home/Hero";
import BestSeller from "@/components/home/BestSeller";
import Rugs from "@/components/home/Rugs";
import NewArrivals from "@/components/home/NewArrivals";
import Furniture from "@/components/home/Furniture";
import Testimonials from "@/components/home/Testimonials";

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
      <AdBanner />
      <Hero />
      <BestSeller />
      <NewArrivals />
      <Rugs />
      <Furniture />
      <Testimonials />
    </>
  );
}
