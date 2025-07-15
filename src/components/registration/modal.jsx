import { use, useState } from "react";
import Login from "./login";
import Registration from "./registration";
import ForgetPassword from "./ForgetPassword";
import RegistrationCode from "./RegistrationCode";
import ResetPassword from "./resetPassword";

const RegistrationModal = () => {
    const [userChoice, setUserChoice] = useState("login");
    const handleUserChoice = (choice) => {
        setUserChoice(choice);
    };
  return (
    <>
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="position-relative text-center p-3">
              <div className="d-inline-block p-4 rounded-circle m-auto modal-icon">
                <i className="fa-regular fa-user "></i>
              </div>
              <span
                type="button"
                className="btm-close position-absolute top-0 end-0 p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark modal-close fs-5"></i>
              </span>
            </div>
            {userChoice === "login" ? (
              <Login handleUserChoice={handleUserChoice} />
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
      </div>
    </>
  );
};

export default RegistrationModal;
