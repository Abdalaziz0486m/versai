"use client";
import { useState } from "react";
import Login from "./login";
import Registration from "./Registration";
import ForgetPassword from "./ForgetPassword";
import RegistrationCode from "./RegistrationCode";
import ResetPassword from "./ResetPassword";

const RegistrationModal = () => {
  const [userChoice, setUserChoice] = useState("login");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleUserChoice = (choice) => setUserChoice(choice);

  const openModal = () => {
    setUserChoice("login"); // دايمًا نبدأ بـ login
    setVisible(true);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300); // نفس مدة الأنيميشن
  };

  return (
    <>
      {/* الزرار ده ممكن يكون في الناف بار أو أي مكان */}
      <span onClick={openModal}>
        <i
          className="fa-regular fa-user fs-5"
          style={{ cursor: "pointer" }}
        ></i>
      </span>

      {visible && (
        <div className="modal-overlay">
          <div
            className={`modal-container p-3 ${closing ? "slide-up" : "slide-down"}`}
          >
            <div className="position-relative text-center p-3">
              <div className="d-inline-block p-4 rounded-circle m-auto modal-icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <span
                type="button"
                className="btm-close position-absolute top-0 end-0 p-3"
                onClick={closeModal}
              >
                <i className="fa-solid fa-xmark modal-close fs-5"></i>
              </span>
            </div>

            {userChoice === "login" ? (
              <Login handleUserChoice={handleUserChoice} onClose={closeModal} />
            ) : userChoice === "forgotPassword" ? (
              <ForgetPassword handleUserChoice={handleUserChoice} />
            ) : userChoice === "registration" ? (
              <Registration handleUserChoice={handleUserChoice} />
            ) : userChoice === "registrationCode" ? (
              <RegistrationCode handleUserChoice={handleUserChoice} />
            ) : userChoice === "resetPassword" ? (
              <ResetPassword handleUserChoice={handleUserChoice} />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;
