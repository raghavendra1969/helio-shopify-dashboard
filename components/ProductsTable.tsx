"use client";
import { products } from "@/lib/data";

const statusMap: Record<string, { label: string; cls: string }> = {
  active: { label: "In Stock",    cls: "badge badge-green" },
  low:    { label: "Low Stock",   cls: "badge badge-amber" },
  out:    { label: "Out of Stock",cls: "badge badge-red"   },
};

export default function ProductsTable() {
  return (
    <div className="card" style={{ marginBottom: 16 }}>
      <p style={{ fontSize:13, fontWeight:500, color:"var(--text)", marginBottom:14 }}>Top Products</p>
      <table style={{ width:"100%", borderCollapse:"collapse" }}>
        <thead>
          <tr>
            {["Product","Category","Stock","Sales (7d)","Revenue","Status"].map(h => (
              <th key={h} style={{ fontSize:11, color:"var(--text2)", fontWeight:500, textAlign:"left", padding:"6px 8px", borderBottom:"1px solid var(--border)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(p => {
            const pct = Math.round((p.stock / p.maxStock) * 100);
            const barColor = p.status==="active" ? "#0f172a" : p.status==="low" ? "#f59e0b" : "#ef4444";
            return (
              <tr key={p.id}>
                <td style={{ padding:"10px 8px", borderBottom:"1px solid var(--border)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:22 }}>{p.emoji}</span>
                    <span style={{ fontSize:12, fontWeight:500, color:"var(--text)" }}>{p.name}</span>
                  </div>
                </td>
                <td style={{ fontSize:12, color:"var(--text2)", padding:"10px 8px", borderBottom:"1px solid var(--border)" }}>{p.category}</td>
                <td style={{ padding:"10px 8px", borderBottom:"1px solid var(--border)" }}>
                  <span style={{ fontSize:12, color:"var(--text)" }}>{p.stock}/{p.maxStock}</span>
                  <div style={{ height:4, borderRadius:2, background:"var(--border)", marginTop:4 }}>
                    <div style={{ height:"100%", width:`${pct}%`, borderRadius:2, background:barColor }} />
                  </div>
                </td>
                <td style={{ fontSize:12, color:"var(--text)", padding:"10px 8px", borderBottom:"1px solid var(--border)" }}>{p.sales} units</td>
                <td style={{ fontSize:12, fontWeight:500, color:"var(--text)", padding:"10px 8px", borderBottom:"1px solid var(--border)" }}>₹{p.revenue.toLocaleString()}</td>
                <td style={{ padding:"10px 8px", borderBottom:"1px solid var(--border)" }}>
                  <span className={statusMap[p.status].cls}>{statusMap[p.status].label}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
