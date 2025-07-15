"use client";
import { createContext, useContext, useState } from "react";

const QuickViewContext = createContext();

export function QuickViewProvider({ children }) {
  const [active, setActive] = useState(false);

  const handleOpen = () => setActive(true);
  const handleClose = () => setActive(false);

  return (
    <QuickViewContext.Provider value={{ active, handleOpen, handleClose }}>
      {children}
    </QuickViewContext.Provider>
  );
}

export function useQuickView() {
  return useContext(QuickViewContext);
}
