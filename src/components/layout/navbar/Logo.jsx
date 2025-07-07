import Image from "next/image";
import logoLight from "../../../images/logo-light.png";
import logoDark from "../../../images/logo-dark.png";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
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
    <>
      <Link className="navbar-brand" href="/">
        <Image src={logo} alt="Versai Logo" width={120} height={120} priority />
      </Link>
    </>
  );
};

export default Logo;
