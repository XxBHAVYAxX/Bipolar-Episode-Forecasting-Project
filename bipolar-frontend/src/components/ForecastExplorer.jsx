import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, AlertTriangle, Shield, Calendar } from "lucide-react";

const forecastData = [
  { day: "Mon", predicted: 6.5, actual: 6 },
  { day: "Tue", predicted: 5.8, actual: 5 },
  { day: "Wed", predicted: 6.2, actual: 7 },
  { day: "Thu", predicted: 5.0, actual: 4 },
  { day: "Fri", predicted: 6.8, actual: 6 },
  { day: "Sat", predicted: 7.5, actual: 8 },
  { day: "Sun", predicted: 7.0, actual: null },
];

const riskData = [
  { week: "W1", mania: 12, depression: 35 },
  { week: "W2", mania: 18, depression: 42 },
  { week: "W3", mania: 15, depression: 38 },
  { week: "W4", mania: 22, depression: 30 },
];

const cards = [
  { title: "7-Day Outlook", value: "Stable", icon: Shield, gradient: "linear-gradient(135deg, #10b981, #14b8a6)" },
  { title: "Risk Alert", value: "Low", icon: AlertTriangle, gradient: "linear-gradient(135deg, #f59e0b, #ef4444)" },
  { title: "Confidence", value: "82%", icon: TrendingUp, gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)" },
];

const ForecastExplorer = () => (
  <>
    <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
      style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "32px", fontFamily: "'Space Grotesk', sans-serif" }}>
      Forecast
    </motion.h1>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "32px" }}>
      {cards.map((item, i) => (
        <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          style={{
            borderRadius: "16px", padding: "24px", color: "white",
            background: item.gradient, boxShadow: "0 4px 24px -4px rgba(0,0,0,0.15)"
          }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px", fontWeight: 500, opacity: 0.9 }}>{item.title}</p>
            <item.icon size={20} style={{ opacity: 0.7 }} />
          </div>
          <p style={{ fontSize: "30px", fontWeight: "bold", marginTop: "8px", fontFamily: "'Space Grotesk', sans-serif" }}>{item.value}</p>
        </motion.div>
      ))}
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Space Grotesk', sans-serif" }}>
          <Calendar size={20} color="#8b5cf6" /> Predicted vs Actual
        </h3>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={forecastData}>
            <defs>
              <linearGradient id="predGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} /><stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} /></linearGradient>
              <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} /><stop offset="100%" stopColor="#14b8a6" stopOpacity={0} /></linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} domain={[0, 10]} />
            <Tooltip contentStyle={{ background: "#fff", border: "none", borderRadius: "12px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.12)" }} />
            <Area type="monotone" dataKey="predicted" stroke="#8b5cf6" fill="url(#predGrad)" strokeWidth={3} strokeDasharray="6 3" dot={{ r: 4 }} />
            <Area type="monotone" dataKey="actual" stroke="#14b8a6" fill="url(#actGrad)" strokeWidth={3} dot={{ r: 4 }} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "24px", fontFamily: "'Space Grotesk', sans-serif" }}>Episode Risk by Week</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={riskData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="week" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip contentStyle={{ background: "#fff", border: "none", borderRadius: "12px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.12)" }} />
            <Bar dataKey="mania" fill="#fb923c" radius={[8, 8, 0, 0]} />
            <Bar dataKey="depression" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </>
);

export default ForecastExplorer;
