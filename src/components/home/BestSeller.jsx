import { useTranslations } from "next-intl";
import ProductSwiper from "../product/BroductSwiper";

const BestSeller = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="BestSeller py-5">
      <div className="container">
        <h2 className="section-title">{t("BestSeller")}</h2>
        <ProductSwiper />
      </div>
    </section>
  );
};

export default BestSeller;
