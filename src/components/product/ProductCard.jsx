"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useQuickView } from "@/contexts/QuickViewContext";
import { useUser } from "@/contexts/UserContext";
import { useModal } from "@/contexts/ModalContext";
import { toast } from "react-toastify";
import ProductImage from "../../images/card-image.png";

const ProductCard = ({ product }) => {
  const t = useTranslations("productCard");
  const { handleOpen } = useQuickView();
  const { user, token } = useUser();
  const { openModal } = useModal();
  const locale = useLocale();

  if (!product || typeof product !== "object") {
    console.warn("🚨 المنتج غير موجود أو غير صالح:", product);
    return null;
  }

  const handleAddToCart = async () => {
    if (!user) {
      openModal("login");
      toast.warning(t("haveToLogin"));
      return;
    }

    // 🟡 تأكد إن فيه على الأقل variant واحد
    const defaultVariant = product.variants?.[0];

    if (!product._id || !defaultVariant?._id) {
      console.error("Product ID and Variant ID are required");
      toast.error("حدث خطأ في المنتج، برجاء المحاولة لاحقًا");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({
          product: product._id,
          variant: defaultVariant._id,
          quantity: 1,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "خطأ في إضافة المنتج للسلة");
      }

      toast.success(t("addedSuccessfully"));
    } catch (error) {
      console.error("❌ خطأ أثناء الإضافة للسلة:", error);
      toast.error(t("errorWhileAdding") || "حدث خطأ أثناء الإضافة إلى السلة");
    }
  };

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
        <button className="add-to-cart w-100" onClick={handleAddToCart}>
          <i className="fa-solid fa-basket-shopping mx-1"></i>
          {t("addToCart")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
