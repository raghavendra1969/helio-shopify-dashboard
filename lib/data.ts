export const weeklyRevenue = [
  { day: "Mon", current: 38200, prev: 35000 },
  { day: "Tue", current: 42100, prev: 38000 },
  { day: "Wed", current: 39500, prev: 41000 },
  { day: "Thu", current: 51200, prev: 44000 },
  { day: "Fri", current: 48700, prev: 43000 },
  { day: "Sat", current: 62300, prev: 55000 },
  { day: "Sun", current: 55400, prev: 49000 },
];

export const products = [
  { id: 1, name: "Wireless Earbuds Pro", category: "Electronics", emoji: "🎧", stock: 43, maxStock: 100, sales: 128, revenue: 64000, status: "active" },
  { id: 2, name: "Leather Wallet",       category: "Accessories", emoji: "👜", stock: 11, maxStock: 80,  sales: 94,  revenue: 28200, status: "low" },
  { id: 3, name: "Yoga Mat Premium",     category: "Fitness",     emoji: "🧘", stock: 67, maxStock: 120, sales: 76,  revenue: 22800, status: "active" },
  { id: 4, name: "Ceramic Coffee Mug",   category: "Lifestyle",   emoji: "☕", stock: 0,  maxStock: 60,  sales: 55,  revenue: 11000, status: "out" },
  { id: 5, name: "Running Shoes X2",     category: "Footwear",    emoji: "👟", stock: 29, maxStock: 90,  sales: 41,  revenue: 82000, status: "active" },
];

export const recentOrders = [
  { id: "#8821", name: "Priya Sharma",  item: "Earbuds Pro",    amount: 3200, time: "4 min ago" },
  { id: "#8820", name: "Arjun Mehta",   item: "Running Shoes",  amount: 5800, time: "11 min ago" },
  { id: "#8819", name: "Sneha Rao",     item: "Yoga Mat",       amount: 1800, time: "23 min ago" },
  { id: "#8818", name: "Vikram Nair",   item: "Leather Wallet", amount: 1200, time: "38 min ago" },
  { id: "#8817", name: "Meera Iyer",    item: "Coffee Mug",     amount:  600, time: "52 min ago" },
];

export const funnelData = [
  { label: "Visitors",      count: 4020 },
  { label: "Product views", count: 2180 },
  { label: "Add to cart",   count: 842  },
  { label: "Checkout",      count: 312  },
  { label: "Purchased",     count: 148  },
];

export const aiInsights = [
  { icon: "📈", title: "Trending", body: "Wireless Earbuds Pro saw 3x clicks after an AI chat recommendation yesterday. Consider a flash sale." },
  { icon: "⚠️", title: "Low stock", body: "Leather Wallet drops below reorder point in ~2 days based on current velocity." },
  { icon: "💬", title: "Support", body: "61 shoppers resolved queries via AI concierge today, saving ~3.5 hrs of manual support." },
];