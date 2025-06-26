"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FaComments,
} from "react-icons/fa";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialMediaLinks = [
    { icon: FaFacebookF, href: "#", color: "#1877f2", name: "facebook" },
    { icon: FaYoutube, href: "#", color: "#ff0000", name: "youtube" },
    { icon: FaTiktok, href: "#", color: "#000000", name: "tiktok" },
    { icon: FaSnapchatGhost, href: "#", color: "#fffc00", name: "snapchat" },
    { icon: FaTwitter, href: "#", color: "#1da1f2", name: "twitter" },
    { icon: FaInstagram, href: "#", color: "#e4405f", name: "instagram" },
  ];
  return (
    <footer className="  py-5">
      <div className="container">
        <div className="row justify-content-between align-items-start">
          {/* Left Section - App Download */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">تحميل تطبيق الجوال</h6>
            <div className="d-flex flex-column gap-2">
              <Link href="#" className="text-decoration-none">
                <img
                  src="/api/placeholder/150/50"
                  alt="Download on Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </Link>
              <Link href="#" className="text-decoration-none">
                <img
                  src="/api/placeholder/150/50"
                  alt="Download on App Store"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </Link>
            </div>

            {/* Logo and Description */}
            <div className="mt-4">
              <div className="d-flex align-items-center mb-2">
                <div className="text-primary me-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 2L30 12L20 22L10 12L20 2Z" fill="#6f42c1" />
                    <path
                      d="M20 18L30 28L20 38L10 28L20 18Z"
                      fill="#6f42c1"
                      fillOpacity="0.7"
                    />
                  </svg>
                </div>
              </div>
              <p className="small mb-0">موثق لدى منصة الأعمال</p>
            </div>
          </div>

          {/* Center Section - Brand and Contact */}
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            {/* Brand Logo */}
            <div className="mb-3">
              <h2
                className="fw-bold mb-1"
                style={{ fontSize: "2rem", letterSpacing: "2px" }}
              >
                سرداب
              </h2>
              <p
                className="text-uppercase small  mb-0"
                style={{ letterSpacing: "3px" }}
              >
                SERDAB
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-3">
              <p className=" small mb-1">
                نسعى جاهدين لتقديم خدمة تميزنا وتحقق رضاكم
              </p>
              <p className=" small mb-1">الأعزاء العملاء</p>
              <p className="fw-bold mb-0">30227465460003</p>
            </div>

            {/* Contact Methods */}
            <div className="d-flex justify-content-center gap-3 mb-3">
              <Link
                href="mailto:help@serdababaya.com"
                className="text-decoration-none"
              >
                <div className="d-flex align-items-center">
                  <FaEnvelope className="me-1" />
                  <span className="small">help@serdababaya.com</span>
                </div>
              </Link>
              <Link href="tel:+966530776754" className="text-decoration-none">
                <div className="d-flex align-items-center">
                  <FaPhone className="me-1" />
                  <span className="small">+966530776754</span>
                </div>
              </Link>
              <Link
                href="https://wa.me/966530776754"
                className="text-decoration-none"
              >
                <div className="d-flex align-items-center">
                  <FaWhatsapp className="me-1" />
                  <span className="small">+966530776754</span>
                </div>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center gap-2 mb-3">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === social.name;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-decoration-none"
                  >
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

          {/* Right Section - Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">روابط مهمة</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none small">
                  سياسة الخصوصية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none small">
                  سياسة الطلب والشحن والتوصيل
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none small">
                  سياسة الاستبدال والاسترجاع
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none small">
                  المحافظة على الجودة والملاءمة
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none small">
                  الشبكة التجارية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none small">
                  المقاسات
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <span className=" small">Message us</span>
              <div
                className="ms-2 bg-warning rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "30px", height: "30px" }}
              >
                <FaComments style={{ fontSize: "14px" }} />
              </div>
            </div>
            <div className=" small">
              <span>الدفوع معتمدة | متجر سرداب للعبايات © 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
