"use client";

import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import hero3 from "../../images/hero3.png";

export default function Hero() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const slides = [
    {
      image: hero1,
      title: {
        en: "Luxury Rugs Collection",
        ar: "تشكيلة السجاد الفاخر",
      },
      description: {
        en: "Explore timeless elegance for your home.",
        ar: "استكشف أناقة لا تنتهي لمنزلك.",
      },
      link: "/shop",
    },
    {
      image: hero2,
      title: {
        en: "Unique Antiques & Decor",
        ar: "أنتيكات وديكورات فريدة",
      },
      description: {
        en: "Bring history and charm into your space.",
        ar: "أضف لمسة تاريخية وجاذبية لمكانك.",
      },
      link: "/antiques",
    },
    {
      image: hero3,
      title: {
        en: "Diverse Collection",
        ar: "تشكيلة متنوعة",
      },
      description: {
        en: "Find the perfect piece for your home.",
        ar: "ابحث عن القطعة المثالية لمنزلك.",
      },
      link: "/collection",
    },
  ];

  return (
    <section
      className={`hero-section ${isRTL ? "text-end" : "text-start"} py-0`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="position-relative w-100 container my-5"
              style={{
                minHeight: "65vh",
                maxHeight: "100vh",
                overflow: "hidden",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title?.[locale] || "Hero Slide"}
                fill
                priority={idx === 0}
                className="w-100 h-100 object-fit-cover"
              />

              {(slide.title?.[locale] || slide.description?.[locale]) && (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50 text-white px-3 px-md-5">
                  <div className="container">
                    {slide.title?.[locale] && (
                      <h1 className="fw-bold mb-3 display-5 display-md-3">
                        {slide.title[locale]}
                      </h1>
                    )}
                    {slide.description?.[locale] && (
                      <p className="lead mb-4">{slide.description[locale]}</p>
                    )}
                    <Link
                      href={slide.link}
                      className="btn btn-light btn-lg fw-semibold"
                    >
                      {locale === "ar" ? "تسوّق الآن" : "Shop Now"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
