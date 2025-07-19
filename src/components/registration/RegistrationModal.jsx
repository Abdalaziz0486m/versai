"use client";
import Login from "./login";
import Registration from "./Registration";
import ForgetPassword from "./ForgetPassword";
import RegistrationCode from "./RegistrationCode";
import ResetPassword from "./ResetPassword";
import { useModal } from "@/contexts/ModalContext";
import { useRouter } from "@/i18n/navigation";
import { useEffect } from "react";
import { useUser } from "@/contexts/UserContext";

const RegistrationModal = () => { 
  const {
    visible,
    closing,
    userChoice,
    setUserChoice,
    openModal,
    closeModal,
    redirectAfterLogin,
  } = useModal();

  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && redirectAfterLogin) {
      closeModal();
      router.push(redirectAfterLogin);
    }
  }, [user]);

  return (
    <>
      {/* ✅ الزرار تقدر تستخدمه في الناف أو أي مكان تاني */}
      <span onClick={() => openModal("login")}>
        <i
          className="fa-regular fa-user fs-5"
          style={{ cursor: "pointer" }}
        ></i>
      </span>

      {visible && (
        <div className="modal-overlay">
          <div
            className={`modal-container p-3 ${
              closing ? "slide-up" : "slide-down"
            }`}
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
              <Login handleUserChoice={setUserChoice} onClose={closeModal} />
            ) : userChoice === "forgotPassword" ? (
              <ForgetPassword handleUserChoice={setUserChoice} />
            ) : userChoice === "registration" ? (
              <Registration handleUserChoice={setUserChoice} />
            ) : userChoice === "registrationCode" ? (
              <RegistrationCode handleUserChoice={setUserChoice} />
            ) : userChoice === "resetPassword" ? (
              <ResetPassword handleUserChoice={setUserChoice} />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;
