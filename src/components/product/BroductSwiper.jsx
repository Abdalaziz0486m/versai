"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // ✅ (اختياري، حسب الاستايل)

import { Navigation, Autoplay } from "swiper/modules";

const ProductSwiper = () => {
  return (
    <div className="product-list">
      <Swiper
        modules={[Navigation, Autoplay]} // ✅ أضف Autoplay هنا
        spaceBetween={50}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 5000 }} // ✅ هذا الآن سيعمل
        effect="slide"
        breakpoints={{
          240: { slidesPerView: 1 },
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1440: { slidesPerView: 4 },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
