"use client";
import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";

const EcommerceBanner = () => {
  const locale = useLocale(); // "ar" or "en"
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerOffers, setBannerOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch("/data/banner-offers.json");
        const data = await res.json();
        setBannerOffers(data);
      } catch (err) {
        console.error("Failed to load banner offers:", err);
      }
    };

    fetchOffers();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        bannerOffers.length ? (prev + 1) % bannerOffers.length : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerOffers.length]);

  if (bannerOffers.length === 0) return null;

  return (
    <>
      <div className="position-relative overflow-hidden">
        <div
          className={`${bannerOffers[currentSlide].bgColor} ${bannerOffers[currentSlide].textColor} py-3`}
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h5 className="mb-0 fw-bold animate__animated animate__fadeIn">
                  {bannerOffers[currentSlide].text[locale]}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-1">
          <div className="d-flex gap-1">
            {bannerOffers.map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle p-1 ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
                style={{ width: "8px", height: "8px" }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate__fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default EcommerceBanner;
