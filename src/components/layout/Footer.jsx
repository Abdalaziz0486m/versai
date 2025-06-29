"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoLight from "../../images/logo-light.png";
import logoDark from "../../images/logo-dark.png";
import { useTranslations } from "next-intl";
import { useTheme } from "@/contexts/ThemeContext";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaSnapchatGhost,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("footer");
  const { theme } = useTheme();
  const [actualTheme, setActualTheme] = useState("light");

  useEffect(() => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setActualTheme(isDark ? "dark" : "light");

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => setActualTheme(e.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      setActualTheme(theme);
    }
  }, [theme]);

  const socialMediaLinks = [
    { icon: FaFacebookF, href: "#", color: "#1877f2", name: "facebook" },
    { icon: FaYoutube, href: "#", color: "#ff0000", name: "youtube" },
    { icon: FaTiktok, href: "#", color: "#000000", name: "tiktok" },
    { icon: FaSnapchatGhost, href: "#", color: "#fffc00", name: "snapchat" },
    { icon: FaTwitter, href: "#", color: "#1da1f2", name: "twitter" },
    { icon: FaInstagram, href: "#", color: "#e4405f", name: "instagram" },
  ];

  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row justify-content-center align-items-start">
          {/* Center Section */}
          <div className="col-lg-5 col-md-6 mb-4 text-center">
            <div className="mb-3">
              <Image
                src={actualTheme === "dark" ? logoDark : logoLight}
                alt="Versai Logo"
                width={150}
                height={150}
              />
            </div>

            <div className="mb-3">
              <p className="small mb-1">{t("slogan")}</p>
              <p className="small mb-1">{t("strive")}</p>
              <p className="fw-bold mb-0">{t("cr")}</p>
            </div>

            <div className="d-flex justify-content-center gap-3 mb-3">
              <Link href="mailto:info@versai.com">
                <div className="d-flex align-items-center">
                  <FaEnvelope className="me-1" />
                  <span className="small">info@versai.com</span>
                </div>
              </Link>
              <Link href="tel:+201234567890">
                <div className="d-flex align-items-center">
                  <FaPhone className="me-1" />
                  <span className="small">+20 123 456 7890</span>
                </div>
              </Link>
              <Link href="https://wa.me/201234567890">
                <div className="d-flex align-items-center">
                  <FaWhatsapp className="me-1" />
                  <span className="small">+20 123 456 7890</span>
                </div>
              </Link>
            </div>

            <div className="d-flex justify-content-center gap-2 mb-3">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === social.name;

                return (
                  <Link key={index} href={social.href}>
                    <div
                      className="rounded-circle border d-flex align-items-center justify-content-center"
                      style={{
                        width: "35px",
                        height: "35px",
                        backgroundColor: isHovered ? social.color : "white",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <IconComponent
                        style={{
                          color: isHovered ? "white" : "#6c757d",
                          fontSize: "16px",
                        }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top">
          <div className="col-12 d-flex justify-content-center">
            <div className="small">
              <span>{t("rights")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
