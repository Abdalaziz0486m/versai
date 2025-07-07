import Image from "next/image";
import logo from "../../../images/logo-dark.png";
import profile from "../../../images/avatar_male.webp";
import { LuBellRing } from "react-icons/lu";
import { FaBoxArchive } from "react-icons/fa6";
import { SlBasketLoaded } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { FaPen } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
export default async function ProfileLayout({ children }) {
  return (
    <>
      <header className=" sctionCart">
        <div className="mt-2 d-flex oneDivCart container">
          <button className="basicBtnCart d-flex align-items-center gap-3">
            الرئيسيه
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <p className="mt-3">حسابي</p>
        </div>
        <div className="profileCoverPlaceholder h-32 w-full object-cover lg:h-48 flex justify-center items-center position-relative mt-2">
          <div className="d-flex justify-content-center align-self-center z-20">
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={150}
              className=" z-20 "
            />
          </div>
          <div className="container">
            <div
              className="divIconPen position-absolute d-flex justify-content-center align-items-center"
              tabIndex="0"
            >
              <Image
                src={profile}
                alt="profile"
                width={100}
                height={100}
                className="image-icon"
              />
              <FaPen className="pen-icon" />
            </div>
          </div>
        </div>

        <div className="container mt-5 borBottom">
          <h2>يوسف محمد</h2>

          <ul className="d-flex gap-4 list-unstyled">
            <li className=" liLinksProfile ">
              <Link
                href="/profile/notification "
                className="d-flex align-items-center profileLinks gap-2"
              >
                <LuBellRing color="#4b5563" className="fs-5" />
                الاشعارات
              </Link>
            </li>
            <li className=" liLinksProfile ">
              <Link
                href="orders"
                className="d-flex align-items-center profileLinks gap-2"
              >
                <FaBoxArchive color="#4b5563" />
                الطلبات
              </Link>
            </li>
            <li className=" liLinksProfile">
              <Link
                href="/profile/waitOrders"
                className="d-flex align-items-center profileLinks gap-2"
              >
                <SlBasketLoaded color="#4b5563" className="fs-5" />
                طلبات بالانتظار الدفع
              </Link>
            </li>
            <li className=" liLinksProfile ">
              <Link
                href="/profile/wishes"
                className="d-flex align-items-center profileLinks gap-2"
              >
                <CiStar color="#4b5563" className="fs-5" />
                الأمنيات
              </Link>
            </li>
            <li className="liLinksProfile">
              <Link
                href="/profile"
                className="d-flex align-items-center profileLinks gap-2"
              >
                <CgProfile color="#4b5563" className="fs-5" />
                حسابي
              </Link>
            </li>
            <li className="d-flex align-items-center liLinksProfile gap-2">
              <IoIosLogOut color="red" className="fs-5" />
              <a href="" className="profileLinks">
                تسجيل الخروج
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
