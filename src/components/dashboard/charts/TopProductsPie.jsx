"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function TopProductsPie() {
  const data = [
    { name: "سجادة تركي", value: 35 },
    { name: "سجادة فارسي", value: 25 },
    { name: "سجادة صوف", value: 20 },
    { name: "سجادة حرير", value: 10 },
    { name: "سجاد صغير", value: 10 },
  ];

  const COLORS = [
    "var(--accent-100)",
    "var(--accent-200)",
    "#6f42c1", // بنفسجي
    "#fd7e14", // برتقالي
    "#20c997", // أخضر
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
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
