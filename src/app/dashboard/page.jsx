"use client";

import SalesChart from "@/components/dashboard/charts/SalesChart";
import OrdersStatusPie from "@/components/dashboard/charts/OrdersStatusPie";
import React from "react";
import TopProductsPie from "@/components/dashboard/charts/TopProductsPie";
import RecentOrdersDataTable from "@/components/dashboard/tables/RecentOrdersDataTable";

export default function DashboardHome() {
  return (
    <div className="dashboard-home">
      <h1 className="mb-4 fw-bold">لوحة التحكم</h1>
      <p className="text-muted mb-4">
        هنا تقدر تتابع أداء المتجر وإحصائياتك بشكل سريع
      </p>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="mb-2">عدد المنتجات</h5>
            <p className="fs-4 fw-bold text-primary">120</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="mb-2">عدد الطلبات</h5>
            <p className="fs-4 fw-bold text-primary">350</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h5 className="mb-2">إجمالي الأرباح</h5>
            <p className="fs-4 fw-bold text-success">15,000 ج.م</p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <div className="card shadow-sm p-3 mb-4">
            <h5 className="mb-3">أكثر المنتجات مبيعًا</h5>
            <TopProductsPie />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm p-3 h-100">
            <h5 className="mb-3">حالات الطلبات</h5>
            <OrdersStatusPie />
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-3 h-100">
        <h5 className="mb-3">إحصائيات المبيعات الشهرية</h5>
        <SalesChart />
      </div>

      <div className="card shadow-sm p-3 mt-4">
        <h5 className="mb-3">آخر الطلبات</h5>
        <RecentOrdersDataTable />
      </div>
    </div>
  );
}
