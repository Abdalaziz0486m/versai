"use client";
import { useTranslations, useLocale } from "use-intl";
import { useState } from "react";

const Registration = ({ handleUserChoice }) => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // نعمل style للأيقونة مرة واحدة
  const eyeIconStyle = {
    position: "absolute",
    top: "50%",
    [isRTL ? "left" : "right"]: "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#555",
  };

  return (
    <>
      <h4 className="modal-title fs-5 mt-3 text-center" id="registerModalLabel">
        {t("register")}
      </h4>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              {t("fullName")}
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder={t("fullName")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {t("email")}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={t("email")}
            />
          </div>

          {/* حقل كلمة السر */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              {t("password")}
            </label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder={t("password")}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={eyeIconStyle}
                title={showPassword ? t("hidePassword") : t("showPassword")}
              >
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
            </div>
          </div>

          {/* حقل تأكيد كلمة السر */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              {t("confirmPassword")}
            </label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                placeholder={t("confirmPassword")}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={eyeIconStyle}
                title={
                  showConfirmPassword ? t("hidePassword") : t("showPassword")
                }
              >
                <i
                  className={`fa ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>
          </div>

          <div className="mb-3">
            <span
              className="registration-choice"
              onClick={() => handleUserChoice("login")}
            >
              {t("alreadyHaveAccount")}
            </span>
          </div>
          <button type="submit" className="w-100">
            {t("register")}
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
