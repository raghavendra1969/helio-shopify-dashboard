"use client";
import { TrendingUp, TrendingDown, Bot } from "lucide-react";

const stats = [
  { label: "Total Revenue",    value: "₹2,84,310", change: "+12.4%", up: true,  icon: <TrendingUp size={13}/> },
  { label: "Orders Today",     value: "148",        change: "+8",     up: true,  icon: <TrendingUp size={13}/> },
  { label: "Conversion Rate",  value: "3.7%",       change: "-0.3%",  up: false, icon: <TrendingDown size={13}/> },
  { label: "AI Ticket Saves",  value: "61",         change: "today",  up: true,  icon: <Bot size={13}/> },
];

export default function StatsRow() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 16 }}>
      {stats.map((s) => (
        <div key={s.label} className="stat-card">
          <p style={{ fontSize: 12, color: "var(--text2)", marginBottom: 6 }}>{s.label}</p>
          <p style={{ fontSize: 24, fontWeight: 600, color: "var(--text)" }}>{s.value}</p>
          <p style={{ fontSize: 11, marginTop: 4, color: s.up ? "var(--green)" : "var(--red)", display:"flex", alignItems:"center", gap:3 }}>
            {s.icon} {s.change}
          </p>
        </div>
      ))}
    </div>
  );
}
