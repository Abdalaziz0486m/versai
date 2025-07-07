import Image from "next/image";
import NavLink from "./NavLink";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import avatar from "../../../images/avatar_male.webp";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Controls = ({ handleSearhPage, menuOpen, setMenuOpen }) => {
  const t = useTranslations("nav");
  const [spinning, setSpinning] = useState(false);
  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 500); // مدة اللف
  };

  return (
    <>
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
            <i className={`fa-solid fa-gear ${spinning ? "fa-spin" : ""}`}></i>
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
                  <i className="fa-solid fa-box-archive me-3"></i> {t("orders")}
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
          <Link href="/cart">
            <i className="fa-solid fa-cart-shopping fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger d-none">
              9<span className="visually-hidden">unread messages</span>
            </span>
          </Link>
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
    </>
  );
};

export default Controls;
