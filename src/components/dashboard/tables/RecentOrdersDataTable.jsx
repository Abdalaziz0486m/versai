"use client";

import { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function RecentOrdersDataTable() {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      customer: "أحمد",
      amount: 200,
      date: "2025-07-01",
      status: "مكتمل",
    },
    { id: 2, customer: "منى", amount: 150, date: "2025-07-02", status: "معلق" },
    {
      id: 3,
      customer: "سعيد",
      amount: 300,
      date: "2025-07-03",
      status: "مكتمل",
    },
    {
      id: 4,
      customer: "سعيد",
      amount: 300,
      date: "2025-07-03",
      status: "مكتمل",
    },
  ];

  const filteredData = useMemo(
    () =>
      data.filter((order) =>
        order.customer.toLowerCase().includes(search.toLowerCase())
      ),
    [search, data]
  );

  const columns = [
    { name: "#", selector: (row) => row.id, sortable: true },
    { name: "العميل", selector: (row) => row.customer, sortable: true },
    { name: "القيمة", selector: (row) => row.amount, sortable: true },
    { name: "التاريخ", selector: (row) => row.date, sortable: true },
    { name: "الحالة", selector: (row) => row.status, sortable: true },
  ];

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    saveAs(dataBlob, "orders.xlsx");
  };

  const printTable = () => {
    const printWindow = window.open("", "_blank");
    const tableHtml = `
      <html>
        <head>
          <title>Print</title>
          <style>
            table { width: 100%; border-collapse: collapse; direction: rtl; font-family: Cairo, sans-serif; }
            th, td { border: 1px solid #333; padding: 8px; text-align: center; }
            th { background: #eee; }
          </style>
        </head>
        <body>
          <h3>الطلبات الأخيرة</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>العميل</th>
                <th>القيمة</th>
                <th>التاريخ</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              ${filteredData
                .map(
                  (order) => `
                    <tr>
                      <td>${order.id}</td>
                      <td>${order.customer}</td>
                      <td>${order.amount}</td>
                      <td>${order.date}</td>
                      <td>${order.status}</td>
                    </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `;
    printWindow.document.write(tableHtml);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="recent-orders">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="بحث..."
          className="form-control w-25"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <CSVLink
            data={filteredData}
            filename="orders.csv"
            className="btn btn-secondary mx-1"
          >
            تصدير CSV
          </CSVLink>
          <button onClick={exportExcel} className="btn btn-secondary mx-1">
            تصدير Excel
          </button>
          <button onClick={printTable} className="btn btn-secondary mx-1">
            طباعة
          </button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        striped
        noDataComponent="لا توجد بيانات مطابقة"
      />
    </div>
  );
}
