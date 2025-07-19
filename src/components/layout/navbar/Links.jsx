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
        <NavLink className="nav-link fw-bold" href="/" activeClassName="active" exact>
          {t("home")}
        </NavLink>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <NavLink className="nav-link" href="/products" activeClassName="active">
          {t("products")}
        </NavLink>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <NavLink
          className="nav-link"
          href="/category/silk"
          activeClassName="active"
        >
          {t("silk")}
        </NavLink>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <NavLink
          className="nav-link"
          href="/category/wool"
          activeClassName="active"
        >
          {t("wool")}
        </NavLink>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <NavLink
          className="nav-link"
          href="/articles"
          activeClassName="active"
        >
          {t("articles")}
        </NavLink>
      </li>
    </>
  );
};

export default Links;
