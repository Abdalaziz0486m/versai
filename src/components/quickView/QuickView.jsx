"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import ProductDetails from "../product/ProductDetails";
import { useQuickView } from "@/contexts/QuickViewContext";
import productImage from "../../images/card-image.png";


const QuickView = () => {
  const { active, handleClose, product } = useQuickView();

if (!active || !product) return null;

const gallery = product.gallery || []; // أو product.gallery حسب التسمية
const images = [product.mainImage, ...gallery].filter(Boolean); // mainImage أول صورة
  console.log("images:", images);

  return (
    <div
      className={`position-fixed top-0 bottom-0 start-0 end-0 quickViewWrapper d-flex justify-content-center align-items-center ${
        active ? "" : "d-none"
      }`}
    >
      <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-6 quickView">
        <div className="row position-relative">
          {/* الصور */}
          <div className="col-6 quickViewRow">
            <div className="xmark" onClick={handleClose}>
              ❌
            </div>
            <div className="position-relative">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={productImage}
                      alt={`product image ${idx + 1}`}
                      className="quickViewImage"
                      
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* التفاصيل */}
          <div className="col-6 quickViewDetails show">
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
