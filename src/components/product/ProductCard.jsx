import { useTranslations } from "next-intl";
import cardImage from "../../images/card-image.jpg";
import Image from "next/image";

const ProductCard = () => {
  const t = useTranslations("productCard");
  return (
    <>
      <div className="product-card">
        <div className="product-image position-relative">
          <Image src={cardImage} alt="Product Image" />
          <div className="d-flex justify-content-center align-items-center accordion-collapse product-icon-wrapper">
            <div className="product-icon mx-2">
              <i className="fa-regular fa-heart "></i>
              <i className="fa-solid fa-heart d-none"></i>
            </div>
            <div className="product-icon">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
        <div className="product-details text-center p-3">
          <h5 className="product-title"> سجادة حرير تركي </h5>
          <p className="product-price mb-2">99.99 {t("EGP")}</p>
          <button className="add-to-cart w-100">
            <i className="fa-solid fa-basket-shopping mx-1"></i>
            {t("addToCart")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
