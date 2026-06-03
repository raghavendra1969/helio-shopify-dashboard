import StatsRow from "@/components/StatsRow";
import RevenueChart from "@/components/RevenueChart";
import AIPanel from "@/components/AIPanel";
import ProductsTable from "@/components/ProductsTable";
import RecentOrders from "@/components/RecentOrders";
import ConversionFunnel from "@/components/ConversionFunnel";

export default function Dashboard() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "1.5rem 1rem" }}>

      {/* Topbar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:"#0f172a", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:16 }}>H</div>
          <div>
            <p style={{ fontSize:15, fontWeight:600, color:"var(--text)" }}>HelioAI — Shopify Dashboard</p>
            <p style={{ fontSize:12, color:"var(--text2)" }}>Raghavendra's Store · Last synced 2 min ago</p>
          </div>
        </div>
        <span className="badge badge-live">● Live</span>
      </div>

      {/* Stats */}
      <StatsRow />

      {/* Chart + AI */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 320px", gap:16, marginBottom:16 }}>
        <RevenueChart />
        <AIPanel />
      </div>

      {/* Products */}
      <ProductsTable />

      {/* Orders + Funnel */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        <RecentOrders />
        <ConversionFunnel />
      </div>
    </main>
  );
}
