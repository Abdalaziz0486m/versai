"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import cardImage from "../../images/card-image.png";
import { Link } from "@/i18n/navigation";
import { useQuickView } from "@/contexts/QuickViewContext";

const ProductCard = () => {
  const t = useTranslations("productCard");
  const { handleOpen } = useQuickView()

  return (
    <div className="product-card">
      <div className="product-image position-relative">
        <Link href="/products/silk-rug" className="text-decoration-none">
          <Image src={cardImage} alt="Product Image" />
        </Link>
        <div className="d-flex justify-content-center align-items-center product-icon-wrapper">
          <div className="product-icon mx-2">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-heart d-none"></i>
          </div>
          <div
            className="product-icon d-lg-flex d-md-none d-none"
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-eye"></i>
          </div>
        </div>
      </div>
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
