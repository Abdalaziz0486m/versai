"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import productImage from "../../images/card-image.png";

export default function DetailsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="DetailsSlider container">
      <div className="row justify-content-center align-items-center">
        {/* Desktop / tablet view - vertical thumbs */}
        <div className="col-2 px-1">
          <Swiper
            direction="vertical"
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            {[...Array(6)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Image src={productImage} alt="product" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-10 px-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {[...Array(6)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Image src={productImage} alt="product" className="img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
