"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../../ui/LanguageSwitcher";
import ThemeToggle from "../../ui/ThemeToggle";
import Image from "next/image";
import logoLight from "../../../images/logo-light.png";
import logoDark from "../../../images/logo-dark.png";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslations } from "next-intl";
import Links from "./Links";
import avatar from "../../../images/avatar_male.webp";
import NavLink from "./NavLink";
import Search from "../search/Search";

const Navbar = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const { theme } = useTheme();
  const [actualTheme, setActualTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("mobile-menu");
      const toggler = document.querySelector(".navbar-toggler");
      if (
        menuOpen &&
        !menu?.contains(e.target) &&
        !toggler?.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 500); // مدة اللف
  };

  function handleSearhPage() {
    const searchPage = document.querySelector(".searchPage");
    if (searchPage) {
      searchPage.classList.toggle("d-block");
    }
  }

  return (
    <>
      <Search handleSearhPage={handleSearhPage} />
      <nav className="navbar py-1 ">
        <div className="container position-relative">
          {/* Logo */}
          <Link className="navbar-brand" href="/">
            <Image
              src={logo}
              alt="Versai Logo"
              width={120}
              height={120}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex justify-content-center ">
            <ul className="navbar-nav flex-row gap-4">
              <Links setMenuOpen={"do nothing"} />
            </ul>
          </div>

          {/* Right Controls */}
          <div className="d-flex align-items-center gap-3 mt-2 me-3 z-3">
            <div className="dropdown">
              <span
                className=""
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`fa-solid fa-gear ${spinning ? "fa-spin" : ""}`}
                ></i>
              </span>
              <ul className="dropdown-menu settings">
                <li className="">
                  <LanguageSwitcher />
                </li>
                <li className="">
                  <ThemeToggle />
                </li>
              </ul>
            </div>
            <div onClick={handleSearhPage}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <div className="dropdown d-none">
                <Image
                  src={avatar}
                  alt="User Avatar"
                  width={30}
                  height={30}
                  className="rounded-circle dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu px-0">
                  <li>
                    <NavLink exact className="dropdown-item" href="#">
                      <i className="fa-regular fa-bell me-3"></i>{" "}
                      {t("notification")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" href="#">
                      <i className="fa-solid fa-box-archive me-3"></i>{" "}
                      {t("orders")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item me-3" href="#">
                      <i className="fa-regular fa-star me-3"></i> {t("wishes")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item me-3" href="#">
                      <i className="fa-regular fa-circle-user me-3"></i>{" "}
                      {t("account")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item me-3" href="#">
                      <i className="fa-solid fa-arrow-right-from-bracket me-3 text-danger"></i>{" "}
                      {t("logout")}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                <i
                  className="fa-regular fa-user fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                ></i>
                <div
                  className="modal fade"
                  id="registerModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="position-relative text-center p-3">
                        <div className="d-inline-block p-4 rounded-circle m-auto modal-icon">
                          <i className="fa-regular fa-user "></i>
                        </div>
                        <h4
                          className="modal-title fs-5 mt-3"
                          id="registerModalLabel"
                        >
                          {t("login")}
                        </h4>
                        <span
                          type="button"
                          className="btm-close position-absolute top-0 end-0 p-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fa-solid fa-xmark modal-close fs-5"></i>
                        </span>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              {t("email")}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder={t("email")}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                              {t("password")}
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder={t("password")}
                            />
                          </div>
                          <button type="submit" className=" w-100">
                            {t("login")}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-relative">
              <i className="fa-solid fa-cart-shopping fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger d-none">
                9<span className="visually-hidden">unread messages</span>
              </span>
            </div>
            {/* Mobile Toggler - Hidden on md+ */}
            <button
              className="navbar-toggler d-lg-none border-0 bg-transparent fs-4"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <i
                className={`fa-solid ${
                  menuOpen ? "fa-xmark rotate" : "fa-bars"
                } transition-icon`}
              ></i>
            </button>
          </div>

          {/* Mobile Slide Menu */}
          <div
            id="mobile-menu"
            className="position-fixed top-0 h-100 bg-body shadow-lg p-4 pt-5 z-2 d-lg-none"
            style={{
              width: "250px",
              transition: "transform 0.3s ease-in-out",
              [isRTL ? "right" : "left"]: 0,
              transform: menuOpen
                ? "translateX(0)"
                : `translateX(${isRTL ? "100%" : "-100%"})`,
            }}
          >
            <Link className="navbar-brand mb-3" href="/">
              <Image src={logo} alt="Versai Logo" width={120} height={120} />
            </Link>
            <ul className="navbar-nav">
              <Links setMenuOpen={setMenuOpen} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
