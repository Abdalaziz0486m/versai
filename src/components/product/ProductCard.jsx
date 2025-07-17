"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useQuickView } from "@/contexts/QuickViewContext";
import { useUser } from "@/contexts/UserContext";
import { toast } from "react-toastify";
import ProductImage from "../../images/card-image.png";

const ProductCard = () => {
  const t = useTranslations("productCard");
  const { handleOpen } = useQuickView();
  const { user } = useUser();
  const locale = useLocale();

  return (
    <div className="product-card">
      <div className="product-image position-relative">
        <Link href={`/products/slilk`} className="text-decoration-none">
          <Image src={ProductImage} alt={"product"} width={300} height={300} priority/>
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
        <h5 className="product-title"> اسم المنتج </h5>
        <p className="product-price mb-2">
          {200} {t("EGP")}
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
