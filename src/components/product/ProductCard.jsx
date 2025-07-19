"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useQuickView } from "@/contexts/QuickViewContext";
import { useUser } from "@/contexts/UserContext";
import { toast } from "react-toastify";
import ProductImage from "../../images/card-image.png";

const ProductCard = ({ product }) => {
  const t = useTranslations("productCard");
  const { handleOpen } = useQuickView();
  const { user } = useUser();
  const locale = useLocale();
  if (!product || typeof product !== "object") {
    console.warn("🚨 المنتج غير موجود أو غير صالح:", product);
    return null;
  }
  console.log("ProductCard product:", product.mainImage);

  return (
    <div className="product-card">
      <div className="product-image position-relative">
        <Link
          href={`/products/${product.slug[locale]}`}
          className="text-decoration-none"
        >
          <Image
            src={ProductImage}
            alt={product.description[locale]}
            width={300}
            height={300}
            priority
          />
        </Link>
        <div className="d-flex justify-content-center align-items-center product-icon-wrapper">
          <div className="product-icon mx-2">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-heart d-none"></i>
          </div>
          <div
            className="product-icon d-lg-flex d-md-none d-none"
            onClick={() => handleOpen(product)}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-eye"></i>
          </div>
        </div>
      </div>
      <div className="product-details text-center p-3">
        <h5 className="product-title"> {product.title[locale]} </h5>
        <p className="product-price mb-2">
          {product.priceRange.min} {t("EGP")}
        </p>
        <button className="add-to-cart w-100">
          <i className="fa-solid fa-basket-shopping mx-1"></i>
          {t("addToCart")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
