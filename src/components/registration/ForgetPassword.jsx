import { useTranslations } from "next-intl";

const ForgetPassword = () => {
    const t = useTranslations("nav");
    return (
      <>
        <h4
          className="modal-title fs-5 mt-3 text-center"
          id="registerModalLabel"
        >
          {t("forgotPassword")}
        </h4>
        <div className="modal-body">
          <p className="text-center">{t("resetPasswordInstructions")}</p>
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
            <button type="submit" className=" w-100">
              {t("sendCode")}
            </button>
            <div className="">
              <span
                className="registration-choice"
                onClick={() => handleUserChoice("login")}
              >
                {t("alreadyHaveAccount")}
              </span>
            </div>
          </form>
        </div>
      </>
    );
}

export default ForgetPassword;