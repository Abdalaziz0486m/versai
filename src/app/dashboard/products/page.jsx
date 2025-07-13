"use client";

import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import productImage from "../../../images/card-image.png";
import Image from "next/image";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  // بيانات تجريبية مع الصور
  const products = [
    {
      id: 1,
      name: "سجادة فارسية",
      price: 500,
      stock: 10,
      category: "سجاد",
      image: productImage,
    },
    {
      id: 2,
      name: "أنتيك ساعة",
      price: 250,
      stock: 5,
      category: "أنتيكات",
      image: productImage,
    },
    {
      id: 3,
      name: "سجادة تركية",
      price: 350,
      stock: 8,
      category: "سجاد",
      image: productImage,
    },
  ];

  const filteredProducts = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, products]
  );

  const columns = [
    { name: "#", selector: (row) => row.id, sortable: true, width: "60px" },
    {
      name: "الصورة",
      selector: (row) => row.image,
      cell: (row) => (
        <Image
          src={row.image}
          alt={row.name}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      ),
      sortable: false,
      width: "70px",
    },
    { name: "الاسم", selector: (row) => row.name, sortable: true },
    { name: "السعر", selector: (row) => row.price, sortable: true },
    { name: "المخزون", selector: (row) => row.stock, sortable: true },
    { name: "الفئة", selector: (row) => row.category, sortable: true },
  ];

  const exportExcel = () => {
    // استبعاد الصور من التصدير
    const exportData = filteredProducts.map(({ image, ...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    saveAs(dataBlob, "products.xlsx");
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
            img { width: 50px; height: 50px; object-fit: cover; border-radius: 4px; }
          </style>
        </head>
        <body>
          <h3>قائمة المنتجات</h3>
          <table>
            <thead>
              <tr>
                <th>الصورة</th>
                <th>#</th>
                <th>الاسم</th>
                <th>السعر</th>
                <th>المخزون</th>
                <th>الفئة</th>
              </tr>
            </thead>
            <tbody>
              ${filteredProducts
                .map(
                  (product) => `
                    <tr>
                      <td><img src="${product.image}" alt="${product.name}"/></td>
                      <td>${product.id}</td>
                      <td>${product.name}</td>
                      <td>${product.price}</td>
                      <td>${product.stock}</td>
                      <td>${product.category}</td>
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
    <div className="products-page">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>المنتجات</h2>
        <button className="btn btn-primary">+ إضافة منتج جديد</button>
      </div>

      <div className="card p-3">
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
              data={filteredProducts.map(({ image, ...rest }) => rest)}
              filename="products.csv"
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
          data={filteredProducts}
          pagination
          highlightOnHover
          striped
          noDataComponent="لا توجد بيانات مطابقة"
        />
      </div>
    </div>
  );
}
