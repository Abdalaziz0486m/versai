import { useLocale } from "next-intl";
import Links from "./Links";
import Logo from "./Logo";

const MobileSlideMenu = ({ setMenuOpen, menuOpen }) => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <>
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
        <Logo />
        <ul className="navbar-nav">
          <Links setMenuOpen={setMenuOpen} />
        </ul>
      </div>
    </>
  );
};

export default MobileSlideMenu;
