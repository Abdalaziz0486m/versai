import Testimonials from "@/components/home/Testimonials";
import ProductCard from "@/components/product/ProductCard";

const SubCategory = () => {
  return (
    <>
      <div className="container">
        <div className="sctionCart">
          <div className="mt-3 d-flex oneDivCart">
            <button className="basicBtnCart d-flex align-items-center gap-3">
              الرئيسيه
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <p className="mt-3">سجاجيد بيج</p>
          </div>
          <div className="d-flex justify-content-between mt-2 secRugPage">
            <h2 className="rugPage">سجاجيد بيج</h2>
            <div className="d-flex align-items-center suggistRugPage gap-3">
              <div>
                <p className="m-0 fs-5">ترتيب</p>
              </div>
              <select name="" id="" className="productSelect p-2">
                <option value="">مقترحاتنا</option>
                <option value="">الاكثر مبيعا</option>
                <option value="">الاعلي تقييما</option>
                <option value="">السعر من الاعلي إلى الاقل</option>
                <option value="">السعر من الاقل إلى الاعلي</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-xxl-3 col-lg-4 col-sm-6">
            <ProductCard />
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default SubCategory;
