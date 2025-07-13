"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header({ toggleSidebar }) {
  return (
    <header className="d-flex align-items-center justify-content-end mb-3 container">
      <ThemeToggle />
      <button
        className="btn btn-outline-primary d-lg-none ms-3" // يظهر فقط في الشاشات الصغيرة
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </header>
  );
}
