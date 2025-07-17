"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

const Registration = ({ handleUserChoice }) => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error(t("passwordsDoNotMatch"));
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fullName,
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || t("registrationFailed"));
      } else {
        toast.success(t("registrationSuccess"));
        toast.info(t("confirmLinkSent"));
        handleUserChoice("login");
        // تفضية الفورم
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(t("somethingWentWrong"));
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              {t("fullName")}
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder={t("fullName")}
              value={formData.fullName}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

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
                value={formData.password}
                onChange={handleInputChange}
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
                value={formData.confirmPassword}
                onChange={handleInputChange}
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

          <button type="submit" className="w-100" disabled={loading}>
            {loading ? (
              <i class="fa-solid fa-spinner fa-spin"></i>
            ) : (
              t("register")
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
