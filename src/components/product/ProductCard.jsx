"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import cardImage from "../../images/card-image.png";
import { Link } from "@/i18n/navigation";

const ProductCard = ({ openQuickView }) => {
  const t = useTranslations("productCard");

  return (
    <div className="product-card">
      <Link href="/products/silk-rug" className="text-decoration-none">
        <div className="product-image position-relative">
          <Image src={cardImage} alt="Product Image" />
          <div className="d-flex justify-content-center align-items-center product-icon-wrapper">
            <div className="product-icon mx-2">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-heart d-none"></i>
            </div>
            <div
              className="product-icon"
              onClick={() =>
                openQuickView({
                  title: "سجادة حرير تركي",
                  price: `99.99 ${t("EGP")}`,
                  images: [cardImage, cardImage, cardImage],
                })
              }
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
      </Link>
      <div className="product-details text-center p-3">
        <h5 className="product-title">سجادة حرير تركي</h5>
        <p className="product-price mb-2">99.99 {t("EGP")}</p>
        <button className="add-to-cart w-100">
          <i className="fa-solid fa-basket-shopping mx-1"></i>
          {t("addToCart")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
