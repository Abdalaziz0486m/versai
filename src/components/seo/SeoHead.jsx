"use client";

import Head from "next/head";
import { useParams } from "next/navigation";

export default function SeoHead({ image = "/og-image.jpg", type = "website" }) {
  const { locale } = useParams();

  const title = undefined;
  const description = undefined;
  const keywords = undefined; // جملة مفصولة بفواصل في الترجمة
  const siteUrl = `https://versai.com/${locale}`;
  const isArabic = locale === "ar";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      <link rel="alternate" hrefLang="ar" href="https://versai.com/ar" />
      <link rel="alternate" hrefLang="en" href="https://versai.com/en" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={isArabic ? "ar_EG" : "en_US"} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Versai" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
