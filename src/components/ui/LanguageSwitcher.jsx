// components/LanguageSwitcher.tsx (Server Component)
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcherClient from "./LanguageSwitcherClient";

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <LanguageSwitcherClient
      currentLocale={locale}
    />
  );
}
