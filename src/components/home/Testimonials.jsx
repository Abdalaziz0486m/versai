"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation"; // استيراد usePathname
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import avatar from "../../images/avatar_male.webp";
import Image from "next/image";

const testimonials = [
  {
    name: "Hadeel Towirqi",
    text: "السجادة طلعت أجمل من الصور، الخامة فخمة جدًا والتفاصيل تفتح النفس 💖💖",
    image: avatar,
  },
  {
    name: "haya N Alnafiei",
    text: "تجربتي مع فيرساي أكثر من رائعة، الشحن سريع والتغليف أنيق جدًا 👌",
    image: avatar,
  },
  {
    name: "Maha Alshureem",
    text: "طلبت سجادة وأنتيكة، الذوق راقٍ والتعامل محترف.. أنصح وبقوة!",
    image: avatar,
  },
  {
    name: "Maha Alshureem",
    text: "طلبت سجادة وأنتيكة، الذوق راقٍ والتعامل محترف.. أنصح وبقوة!",
    image: avatar,
  },
];

export default function Testimonials() {
  const locale = useLocale(); // "ar" or "en"
  const isRTL = locale === "ar";
  const pathname = usePathname();

  // الشرط: إخفاء العنوان لو المسار يحتوي على "product"
  const hideTitle = pathname.includes("product");

  return (
    <>
      {!hideTitle && (
        <div className="d-flex justify-content-center">
          <h2 className="fw-bold mb-4 border-bottom d-inline-block pb-2 border-2 border-dark ">
            {isRTL ? "آراء العملاء" : "Customer Reviews"}
          </h2>
        </div>
      )}
      <section className="py-5 text-center testimonials">
        <div className="container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            dir={isRTL ? "rtl" : "ltr"}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`card shadow-sm h-100 p-3 text-${
                    isRTL ? "end" : "start"
                  }`}
                >
                  <FaQuoteLeft className="text-muted fs-3 mb-2" />
                  <p className="mb-4">{item.text}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle border"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                    />
                    <div className={`text-${isRTL ? "end" : "start"}`}>
                      <div className="fw-bold">{item.name}</div>
                      <div className="text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="me-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
