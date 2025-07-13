"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function OrdersStatusPie() {
  const data = [
    { name: "مكتمل", value: 60 },
    { name: "قيد التنفيذ", value: 30 },
    { name: "ملغي", value: 10 },
  ];

  const COLORS = [
    "var(--accent-100)", // مكتمل
    "var(--accent-200)", // قيد التنفيذ
    "#dc3545", // ملغي (لون أحمر ثابت)
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="var(--accent-100)"
          dataKey="value"
          label={({ name, percent }) =>
            `${(percent * 100).toFixed(0)}% ${name}`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
}
