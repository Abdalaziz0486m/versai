import { useTranslations } from "next-intl";
import NavLink from "./NavLink";

const Links = ({ setMenuOpen }) => {
  const t = useTranslations("nav");

  const handleClick = () => {
    if (window.innerWidth < 992) {
      // bootstrap lg = 992px
      setMenuOpen(false);
    }
  };

  return (
    <>
      <li className="nav-item mb-2" onClick={handleClick}>
        <NavLink className="nav-link" href="/" activeClassName="active" exact>
          {t("home")}
        </NavLink>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <NavLink
          className="nav-link"
          href="/contactUs"
          activeClassName="active"
        >
          {t("contact")}
        </NavLink>
      </li>
    </>
  );
};

export default Links;
