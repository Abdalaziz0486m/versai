import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
    </>
  );
}
