"use client";
import { useUser } from "@/contexts/UserContext";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ handleUserChoice, onClose }) => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [showPassword, setShowPassword] = useState(false);
  const [usePasswordLogin, setUsePasswordLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const { email, password } = formData;

    if (!email || (usePasswordLogin && !password)) {
      toast.error(t("pleaseFillAllFields") || "برجاء ملء جميع الحقول");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || t("loginFailed"));
      } else {
        toast.success(t("loginSuccess"));
        login(data.data, data.token);

        onClose();

        setFormData({ email: "", password: "" });
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
        {t("login")}
      </h4>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
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
                    value={formData.password}
                    onChange={handleInputChange}
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
              <button type="submit" className="w-100 mb-2" disabled={loading}>
                {loading ? t("loading") : t("login")}
              </button>
            </>
          )}

          {!usePasswordLogin && (
            <button type="submit" className="w-100 mb-2" disabled={loading}>
              {loading ? t("loading") : t("login")}
            </button>
          )}

          <div className="mb-3 text-center">
            <span
              className="registration-choice"
              style={{ cursor: "pointer", color: "#007bff" }}
              onClick={() => setUsePasswordLogin(!usePasswordLogin)}
            >
              {usePasswordLogin
                ? "التسجيل بالبريد الإلكتروني"
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
            <div className="mb-3">
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
