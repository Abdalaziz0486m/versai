"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const Login = ({ handleUserChoice }) => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [showPassword, setShowPassword] = useState(false);
  const [usePasswordLogin, setUsePasswordLogin] = useState(false);

  // style للأيقونة حسب الاتجاه
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
        {t("login")}
      </h4>
      <div className="modal-body">
        <form>
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

          {/* طريقة التسجيل بالرقم السري */}
          {usePasswordLogin && (
            <>
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
                      className={`fa ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                    ></i>
                  </span>
                </div>
              </div>
              <button type="submit" className="w-100 mb-2">
                {t("login") || "تسجيل الدخول بالرقم السري"}
              </button>
            </>
          )}

          {/* الزرار الأصلي يظهر فقط لما نكون مش مختارين التسجيل بالرقم السري */}
          {!usePasswordLogin && (
            <button type="submit" className="w-100 mb-2">
              {t("login")}
            </button>
          )}
          {/* اللينك الي بيظهر ويخفي طريقة التسجيل بالرقم السري */}
          <div className="mb-3 text-center">
            <span
              className="registration-choice"
              style={{ cursor: "pointer", color: "#007bff" }}
              onClick={() => setUsePasswordLogin(!usePasswordLogin)}
            >
              {usePasswordLogin
                ? " التسجيل  بالبريد الإلكتروني"
                : "التسجيل بالرقم السري"}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              <span
                className="registration-choice"
                onClick={() => handleUserChoice("registration")}
              >
                {t("createAccount")}
              </span>
            </div>
            <div className="">
              <span
                className="registration-choice"
                onClick={() => handleUserChoice("forgotPassword")}
              >
                {t("forgotPassword")}
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
