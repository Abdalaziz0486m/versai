"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import productImage from "../../images/card-image.png";
import { Navigation } from "swiper/modules";
import ProductDetails from "../product/ProductDetails";

const QuickView = ({ active, handleClose }) => {
  return (
    <>
      <div
        className={`position-fixed top-0 bottom-0 start-0 end-0 quickViewWrapper d-flex justify-content-center align-items-center ${
          active ? "" : "d-none"
        }`}
      >
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-6 quickView">
          <div className="row position-relative ">
            <div className="col-6 quickViewRow">
              <div className="xmark" onClick={handleClose}>
                ❌
              </div>
              <div className="position-relative">
                {/* أزرار النفيجيشن */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  className=""
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[Navigation]}
                >
                  {[...Array(6)].map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <Image
                        src={productImage}
                        alt="product"
                        className="quickViewImage"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-6 quickViewDetails show">
              <div>
                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickView;
