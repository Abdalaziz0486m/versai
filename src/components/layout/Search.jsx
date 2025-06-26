import ProductCard from "@/components/product/ProductCard";
import { useTranslations } from "next-intl";

const Search = ({ handleSearhPage }) => {
  const t = useTranslations("search");
  return (
    <>
      <div className="position-fixed top-0 bottom-0 start-0 end-0 searchPage w-100 overflow-auto">
        <div className="position-relative p-5  search-wrapper">
          <div className="position-absolute top-0 start-0 end-0 ">
            <span
              type="button"
              className="btm-close position-absolute top-0 end-0 p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleSearhPage}
            >
              <i className="fa-solid fa-xmark modal-close fs-5"></i>
            </span>
          </div>
          <div className="col-md-3 col-sm-6  m-auto">
            <input
              type="search"
              className="form-control rounded-pill"
              placeholder={t("placeholder")}
            />
          </div>
          <div className="container mt-5">
            <div className="row g-3">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
