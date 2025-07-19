"use client";
import { createContext, useContext, useState } from "react";

const QuickViewContext = createContext();

export function QuickViewProvider({ children }) {
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState(null);

  const handleOpen = (productData) => {
    setProduct(productData);
    setActive(true);
  };

  const handleClose = () => {
    setProduct(null);
    setActive(false);
  };

  return (
    <QuickViewContext.Provider
      value={{ active, product, handleOpen, handleClose }}
    >
      {children}
    </QuickViewContext.Provider>
  );
}

export function useQuickView() {
  return useContext(QuickViewContext);
}
