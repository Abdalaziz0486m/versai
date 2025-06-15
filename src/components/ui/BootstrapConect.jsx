"use client";
import { useEffect } from "react";

const BootstrapConect = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
};

export default BootstrapConect;
