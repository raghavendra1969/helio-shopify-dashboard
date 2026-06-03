"use client";
import { funnelData } from "@/lib/data";

const colors = ["#0f172a","#334155","#475569","#64748b","#94a3b8"];

export default function ConversionFunnel() {
  const max = funnelData[0].count;
  return (
    <div className="card">
      <p style={{ fontSize:13, fontWeight:500, color:"var(--text)", marginBottom:14 }}>Conversion Funnel</p>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {funnelData.map((f, i) => {
          const pct = Math.round((f.count / max) * 100);
          return (
            <div key={f.label} style={{ display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:12, color:"var(--text2)", width:90, flexShrink:0 }}>{f.label}</span>
              <div style={{ flex:1, height:20, background:"var(--bg2)", borderRadius:4, overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, height:"100%", background:colors[i], borderRadius:4, display:"flex", alignItems:"center", paddingLeft:8 }}>
                  <span style={{ fontSize:10, fontWeight:500, color:"#fff" }}>{pct}%</span>
                </div>
              </div>
              <span style={{ fontSize:11, color:"var(--text2)", width:36, textAlign:"right" }}>{f.count.toLocaleString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
