"use client";
import { recentOrders } from "@/lib/data";

export default function RecentOrders() {
  return (
    <div className="card">
      <p style={{ fontSize:13, fontWeight:500, color:"var(--text)", marginBottom:12 }}>Recent Orders</p>
      {recentOrders.map(o => (
        <div key={o.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom:"1px solid var(--border)" }}>
          <div>
            <p style={{ fontSize:12, fontWeight:500, color:"var(--text)" }}>{o.id} · {o.name}</p>
            <p style={{ fontSize:11, color:"var(--text2)" }}>{o.item} · {o.time}</p>
          </div>
          <p style={{ fontSize:12, fontWeight:600, color:"var(--text)" }}>₹{o.amount.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
