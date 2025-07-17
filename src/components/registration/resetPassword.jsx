import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const ResetPassword = () => {
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
        {t("resetPassword")}
      </h4>
      <div className="modal-body">
        <form>
          {/* حقل كلمة السر */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              {t("newPassword")}
            </label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder={t("newPassword")}
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
          <button type="submit" className="w-100">
            {t("confirm")}
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
