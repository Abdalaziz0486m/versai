"use client";
import BootstrapClient from "../../components/ui/BootstrapConect";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import Header from "@/components/dashboard/layout/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import "@/app/styles/dashboard.css";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".dashboard-sidebar");
    sidebar?.classList.toggle("active");
  };

  return (
    <ThemeProvider>
      <BootstrapClient />
      <div className="dashboard-container" dir="rtl" lang="ar">
        <aside className="dashboard-sidebar">
          {" "}
          {/* Sidebar هنا */}
          <Sidebar toggleSidebar={toggleSidebar} />
        </aside>
        <main className="dashboard-main">
          <Header toggleSidebar={toggleSidebar} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
