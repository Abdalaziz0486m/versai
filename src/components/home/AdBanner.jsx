"use client";
import React, { useState, useEffect } from "react";

const EcommerceBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerOffers = [
    {
      id: 1,
      text: "🚚 أي أوردر فوق 5000 جنيه التوصيل مجاني",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
    {
      id: 2,
      text: "🔥 خصم 25% على جميع المنتجات - لفترة محدودة",
      bgColor: "bg-danger",
      textColor: "text-white",
    },
    {
      id: 3,
      text: "⚡ توصيل سريع خلال 24 ساعة داخل القاهرة",
      bgColor: "bg-success",
      textColor: "text-white",
    },
    {
      id: 4,
      text: "💳 ادفع عند الاستلام - خدمة آمنة 100%",
      bgColor: "bg-warning",
      textColor: "text-dark",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerOffers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerOffers.length]);

  return (
    <>
      <div className="position-relative overflow-hidden">
        {/* Main Rotating Banner */}
        <div
          className={`${bannerOffers[currentSlide].bgColor} ${bannerOffers[currentSlide].textColor} py-3`}
          style={{
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h5 className="mb-0 fw-bold animate__animated animate__fadeIn">
                  {bannerOffers[currentSlide].text}
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-1 ">
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
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }

        .banner-container {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

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

        .bg-gradient:hover {
          animation-duration: 1s;
        }
      `}</style>

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
      />
    </>
  );
};

export default EcommerceBanner;
