// src/app/[locale]/products/page.jsx

import ProductCard from "@/components/product/ProductCard";
import Testimonials from "@/components/home/Testimonials";

export default async function ProductsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("فشل في جلب البيانات", res.status);
    return <div>حدث خطأ أثناء تحميل المنتجات.</div>;
  }

  const data = await res.json();
  const products = data.products;

  return (
    <>
      <div className="container">
        <div className="sctionCart">{/* باقي الهيدر زي ما هو */}</div>

        <div className="row mt-4 mb-5">
          {products.map((product) => (
            <div key={product.id} className="col-xxl-3 col-lg-4 col-sm-6 g-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </>
  );
}
