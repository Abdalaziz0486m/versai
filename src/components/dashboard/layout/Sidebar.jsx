"use client";

import Link from "next/link";
import { FcHome } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcTreeStructure } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import Logo from "@/components/layout/navbar/Logo";



export default function Sidebar({ toggleSidebar }) {
  return (
    <>
      <Logo />
      <span
        className="d-lg-none toggle position-absolute top-0 end-0" // يظهر فقط في الشاشات الصغيرة
        onClick={toggleSidebar}
      >
        ❌
      </span>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" href="/dashboard">
            <FcHome className="fs-4 me-2" />
            الرئيسية
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/dashboard/products">
            <FcShop className="fs-4 me-2" />
            المنتجات
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/dashboard/orders">
            <FcTreeStructure className="fs-4 me-2" />
            الطلبات
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/dashboard/users">
            <FaUsers className="fs-4 me-2" />
            المستخدمين
          </Link>
        </li>
      </ul>
    </>
  );
}
