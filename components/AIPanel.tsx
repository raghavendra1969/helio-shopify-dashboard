"use client";
import { useState } from "react";
import { Sparkles, ArrowUp } from "lucide-react";
import { aiInsights } from "@/lib/data";

export default function AIPanel() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch {
      setResponse("Could not reach AI. Check your API key.");
    }
    setLoading(false);
    setQuery("");
  }

  return (
    <div className="card" style={{ display:"flex", flexDirection:"column", gap:10 }}>
      <p style={{ fontSize:13, fontWeight:500, color:"var(--text)", display:"flex", alignItems:"center", gap:6 }}>
        <Sparkles size={14} /> Helio AI Insights
      </p>
      {aiInsights.map((i) => (
        <div key={i.title} style={{ background:"var(--bg2)", borderRadius:8, padding:"10px 12px", fontSize:12, color:"var(--text2)", lineHeight:1.5, borderLeft:"2px solid var(--accent)" }}>
          <strong style={{ color:"var(--text)" }}>{i.icon} {i.title}:</strong> {i.body}
        </div>
      ))}
      {response && (
        <div style={{ background:"var(--bg2)", borderRadius:8, padding:"10px 12px", fontSize:12, color:"var(--text)", lineHeight:1.6, borderLeft:"2px solid var(--green)" }}>
          🤖 {response}
        </div>
      )}
      <div style={{ display:"flex", gap:6, marginTop:4 }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key==="Enter" && ask()}
          placeholder="Ask about your store..."
          style={{ flex:1, fontSize:12, padding:"7px 10px", border:"1px solid var(--border)", borderRadius:8, background:"var(--bg)", color:"var(--text)", outline:"none" }}
        />
        <button
          onClick={ask}
          disabled={loading}
          style={{ background:"#0f172a", color:"#fff", border:"none", borderRadius:8, width:34, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", opacity: loading ? 0.6 : 1 }}
        >
          {loading ? "…" : <ArrowUp size={14}/>}
        </button>
      </div>
    </div>
  );
}
