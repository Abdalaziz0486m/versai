"use client";
import { useTranslations } from "next-intl";
import { useState, useRef } from "react";

const RegistrationCode = ({ handleUserChoice }) => {
  const t = useTranslations("nav");

  // 4 حقول كود
  const [codes, setCodes] = useState(["", "", "", ""]);

  // refs لل inputs
  const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9a-zA-Z]{0,1}$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      // لو كتب حرف وروح على اللي بعده
      if (value && index < inputsRef.length - 1) {
        inputsRef[index + 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").trim().slice(0, 4);
    if (pasteData) {
      const newCodes = pasteData.split("").slice(0, 4);
      setCodes(newCodes);
      newCodes.forEach((char, idx) => {
        if (inputsRef[idx].current) {
          inputsRef[idx].current.value = char;
        }
      });
      // روح للآخر
      const lastFilled = newCodes.findIndex((c) => c === "");
      if (lastFilled !== -1) {
        inputsRef[lastFilled].current.focus();
      } else {
        inputsRef[inputsRef.length - 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputsRef[index - 1].current.focus();
    }
  };

  return (
    <>
      <h4 className="modal-title fs-5 mt-3 text-center" id="registerModalLabel">
        {t("EnterCode")}
      </h4>
      <div className="modal-body">
        <p className="text-center">{t("resetLinkSent")}</p>
        <form>
          <p className="text-center">{t("enterCodeInstructions")}</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            {codes.map((code, idx) => (
              <input
                key={idx}
                ref={inputsRef[idx]}
                type="text"
                maxLength="1"
                defaultValue={code}
                onChange={(e) => handleChange(e, idx)}
                onPaste={handlePaste}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="form-control text-center"
                style={{ width: "50px", fontSize: "1.5rem" }}
              />
            ))}
          </div>

          <button type="submit" className="w-100 mt-3">
            {t("confirm")}
          </button>
          <div className="mt-2 text-center">
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
};

export default RegistrationCode;
