import { useTranslations } from "next-intl";
import ProductSwiper from "../product/BroductSwiper";

const Rugs = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <section className="rugs-section py-5">
        <div className="container">
          <h2 className="section-title">{t("Rugs")}</h2>
          <ProductSwiper />
        </div>
      </section>
    </>
  );
};

export default Rugs;
