"use client";

import { useEffect, useState } from "react";
import Search from "../Search";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import Controls from "./Controls";
import MobileSlideMenu from "./Mobile Slide Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  function handleSearhPage() {
    const searchPage = document.querySelector(".searchPage");
    if (searchPage) {
      searchPage.classList.toggle("d-block");
    }
  }

  return (
    <>
      <Search handleSearhPage={handleSearhPage} />
      <nav className="navbar py-0">
        <div className="container position-relative">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <DesktopMenu />

          {/* Right Controls */}
          <Controls
            handleSearhPage={handleSearhPage}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          {/* Mobile Slide Menu */}
          <MobileSlideMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
