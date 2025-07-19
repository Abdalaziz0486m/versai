// contexts/ModalContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useUser } from "@/contexts/UserContext";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [userChoice, setUserChoice] = useState("login");
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);

  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  const openModal = (choice = "login", redirectTo = null) => {
    setUserChoice(choice);
    setRedirectAfterLogin(redirectTo);
    setVisible(true);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  };

  // ✅ حماية مسارات معينة
  useEffect(() => {
    const protectedRoutes = ["/cart", "/profile"];

    const isProtected = protectedRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );

    if (!user && isProtected) {
      router.push("/"); // ارجاع للصفحة الرئيسية
      openModal("login", pathname); // فتح المودال مع حفظ الوجهة
    }
  }, [pathname, user]);

  return (
    <ModalContext.Provider
      value={{
        visible,
        closing,
        userChoice,
        setUserChoice,
        openModal,
        closeModal,
        redirectAfterLogin,
        setRedirectAfterLogin,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
