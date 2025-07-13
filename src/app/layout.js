import { useLocale } from "next-intl";

// /src/app/layout.js
export default function RootLayout({ children }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href={isRTL ? "/css/bootstrap.rtl.min.css" : "/css/bootstrap.min.css"}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
