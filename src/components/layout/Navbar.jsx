"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";
import logoLight from "../../images/logo-light.png";
import logoDark from "../../images/logo-dark.png";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();
  const [actualTheme, setActualTheme] = useState("light");

  useEffect(() => {
    const resolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;
    setActualTheme(resolvedTheme);
  }, [theme]);

  const logo = actualTheme === "dark" ? logoDark : logoLight;

  return (
    <nav className="navbar navbar-expand-md py-1">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="Versai Logo" width={120} height={120} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-md-0 pe-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
          </ul>
        </div>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
