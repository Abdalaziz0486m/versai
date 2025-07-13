"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart() {
  const data = [
    { month: "يناير", sales: 5000 },
    { month: "فبراير", sales: 8000 },
    { month: "مارس", sales: 7500 },
    { month: "أبريل", sales: 9000 },
    { month: "مايو", sales: 12000 },
    { month: "يونيو", sales: 11000 },
    { month: "يوليو", sales: 15000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--accent-100)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--accent-100)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--shadow-100)" />
        <XAxis dataKey="month" stroke="var(--text-100)" />
        <YAxis stroke="var(--text-100)" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="var(--accent-100)"
          fillOpacity={1}
          fill="url(#colorSales)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
