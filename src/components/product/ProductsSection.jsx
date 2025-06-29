"use client";
import { useState } from "react";
import QuickViewModal from "./QuickViewModal";
import ProductCard from "./ProductCard";


export default function ProductsSection() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const openQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <>
      <div className="products-grid">
        <ProductCard openQuickView={openQuickView} />
        {/* ممكن map على منتجات هنا */}
      </div>

      <QuickViewModal
        show={!!quickViewProduct}
        onClose={closeQuickView}
        product={quickViewProduct || { images: [] }}
      />
    </>
  );
}
