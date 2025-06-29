"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const QuickViewModal = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <button className="custom-modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="custom-modal-body">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className="product-swiper"
          >
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image src={img} alt={`Product Image ${idx + 1}`} width="100%" height="auto" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="product-info mt-3 text-center">
            <h5 className="product-title">{product.title}</h5>
            <p className="product-price mb-2">{product.price}</p>
            <button className="add-to-cart w-100 mt-2">
              <i className="fa-solid fa-basket-shopping mx-1"></i>
              إضافة للسلة
            </button>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="custom-modal-overlay" onClick={onClose}></div>
    </div>
  );
};

export default QuickViewModal;
