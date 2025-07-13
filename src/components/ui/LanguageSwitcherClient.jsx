"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";

export default function LanguageSwitcherClient({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const switchLanguage = () => {
    const newLocale = currentLocale === "ar" ? "en" : "ar";
    setIsLoading(true);

    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
      const newPath = `/${newLocale}${pathWithoutLocale}`;

      router.replace(newPath);
      setIsLoading(false);
    });
  };

  const nextLocale = currentLocale === "ar" ? "en" : "ar";

  return (
    <span
      onClick={switchLanguage}
      disabled={isPending || isLoading}
      className="btn-lang rounded-circle position-relative d-flex align-items-center justify-content-center"
      style={{
        width: "44px",
        height: "44px",
        fontSize: "20px",
        opacity: isPending || isLoading ? 0.6 : 1,
        cursor: isPending || isLoading ? "not-allowed" : "pointer",
      }}
      title={nextLocale === "en" ? "Switch to English" : "التبديل إلى العربية"}
      aria-label="Switch language"
    >
      {isPending || isLoading ? (
        <div
          className="spinner-border spinner-border-sm text-secondary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <i className="fa-solid fa-globe"></i>
      )}

      {/* شارة اللغة الصغيرة */}
      {!isPending && !isLoading && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill btn-lang ">
          {nextLocale.toUpperCase()}
          <span className="visually-hidden">unread messages</span>
        </span>
      )}
    </span>
  );
}
