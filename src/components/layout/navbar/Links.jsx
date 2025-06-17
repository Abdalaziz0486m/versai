import { useTranslations } from "next-intl";
import NavLink from "./NavLink";

const Links = ({ setMenuOpen }) => {
  const t = useTranslations("nav");
  return (
    <>
      <li className="nav-item mb-2" onClick={() => setMenuOpen(false)}>
        <NavLink className="nav-link" href="/" activeClassName="active" exact>
          {t("home")}
        </NavLink>
      </li>
      <li className="nav-item" onClick={() => setMenuOpen(false)}>
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
