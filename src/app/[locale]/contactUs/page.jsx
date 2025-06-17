import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("ContactUs");
  return (
    <>
      <section className="container text-center py-5">
        <h2 className="h1">{t("title")}</h2>
      </section>
    </>
  );
};

export default Page;
