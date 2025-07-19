"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import avatar from "../../../images/avatar_male.webp";
import Link from "next/link";
import { useTranslations } from "next-intl";
import RegistrationModal from "@/components/registration/RegistrationModal";
import { useUser } from "@/contexts/UserContext"; // ✅ استيراد الكونتكست

const Controls = ({ handleSearhPage, menuOpen, setMenuOpen }) => {
  const t = useTranslations("nav");
  const { user, logout } = useUser(); // ✅ جلب حالة المستخدم و دالة الخروج

  return (
    <>
      <div className="d-flex align-items-center gap-3 mt-2 me-3 z-3">
        <div className="d-none d-sm-block">
          <LanguageSwitcher />
        </div>
        <div className="d-none d-sm-block">
          <ThemeToggle />
        </div>
        <div onClick={handleSearhPage}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        {user ? (
          <>
            {/* ✅ يظهر فقط لو المستخدم مسجل دخول */}
            <div className="position-relative">
              <Link href="/cart">
                <i className="fa-solid fa-cart-shopping fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger d-none">
                  9<span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>

            <div className="dropdown">
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
                  <NavLink
                    exact
                    className="dropdown-item"
                    href="/profile/notification"
                  >
                    <i className="fa-regular fa-bell me-3"></i>{" "}
                    {t("notification")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className="dropdown-item"
                    href="/profile/orders"
                  >
                    <i className="fa-solid fa-box-archive me-3"></i>{" "}
                    {t("orders")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className="dropdown-item me-3"
                    href="/profile/wishes"
                  >
                    <i className="fa-regular fa-star me-3"></i> {t("wishes")}
                  </NavLink>
                </li>
                <li>
                  <NavLink exact className="dropdown-item me-3" href="/profile">
                    <i className="fa-regular fa-circle-user me-3"></i>{" "}
                    {t("account")}
                  </NavLink>
                </li>
                <li>
                  <span
                    className="dropdown-item me-3"
                    style={{ cursor: "pointer" }}
                    onClick={logout} // ✅ تسجيل الخروج
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket me-3 text-danger"></i>{" "}
                    {t("logout")}
                  </span>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* أيقونة لفتح المودال */}
            

            {/* المودال نفسه */}
            <RegistrationModal />
          </>
        )}

        {/* Mobile Toggler */}
        <span
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
        </span>
      </div>
    </>
  );
};

export default Controls;
