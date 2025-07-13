import { useTranslations } from "next-intl";
import ProductSwiper from "../product/BroductSwiper";

const Furniture = ({ handleOpen }) => {
  const t = useTranslations("HomePage");
  return (
    <>
      <section className="furniture-section py-5">
        <div className="container">
          <h2 className="section-title">{t("Furniture")}</h2>
          <ProductSwiper handleOpen={handleOpen} />
        </div>
      </section>
    </>
  );
};

export default Furniture;
