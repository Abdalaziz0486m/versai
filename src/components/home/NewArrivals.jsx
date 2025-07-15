import { useTranslations } from "next-intl";
import ProductSwiper from "../product/BroductSwiper";

const NewArrivals = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <section className="new-arrivals-section py-5">
        <div className="container">
          <h2 className="section-title">{t("NewArrivals")}</h2>
          <ProductSwiper />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
