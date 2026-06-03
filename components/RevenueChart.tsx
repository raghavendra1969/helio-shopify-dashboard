"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { weeklyRevenue } from "@/lib/data";

export default function RevenueChart() {
  return (
    <div className="card" style={{ marginBottom: 0 }}>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 16, color: "var(--text)" }}>Weekly Revenue</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={weeklyRevenue} barCategoryGap="30%">
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "var(--text3)" }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip
            formatter={(v: number) => ["₹" + v.toLocaleString()]}
            contentStyle={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontSize: 11, color: "var(--text2)" }} />
          <Bar dataKey="current" name="This week" fill="#0f172a" radius={[4,4,0,0]} />
          <Bar dataKey="prev"    name="Last week" fill="#cbd5e1" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
