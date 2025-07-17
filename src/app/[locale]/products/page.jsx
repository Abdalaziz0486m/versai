// src/app/[locale]/products/page.jsx
import Testimonials from "@/components/home/Testimonials";
import ProductCard from "@/components/product/ProductCard";

export default async function Products() {
  return (
    <>
      <div className="container">
        <div className="sctionCart">{/* باقي الهيدر زي ماهو */}</div>

        <div className="row mt-4 mb-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="col-xxl-3 col-lg-4 col-sm-6 g-3">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </>
  );
}
