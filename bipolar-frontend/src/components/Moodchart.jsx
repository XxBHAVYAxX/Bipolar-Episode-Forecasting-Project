import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", mood: 6, sleep: 7 },
  { day: "Tue", mood: 5, sleep: 6.5 },
  { day: "Wed", mood: 7, sleep: 8 },
  { day: "Thu", mood: 4, sleep: 5 },
  { day: "Fri", mood: 6, sleep: 7.5 },
  { day: "Sat", mood: 8, sleep: 8.5 },
  { day: "Sun", mood: 7, sleep: 7.4 },
];

const MoodChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)" }}
  >
    <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "24px", fontFamily: "'Space Grotesk', sans-serif" }}>Mood Trend Analysis</h3>
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
        <YAxis stroke="#9ca3af" fontSize={12} />
        <Tooltip contentStyle={{ background: "#fff", border: "none", borderRadius: "12px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.12)" }} />
        <Area type="monotone" dataKey="mood" stroke="#8b5cf6" fill="url(#moodGradient)" strokeWidth={3} dot={{ r: 4, fill: "#8b5cf6" }} />
        <Area type="monotone" dataKey="sleep" stroke="#14b8a6" fill="url(#sleepGradient)" strokeWidth={3} dot={{ r: 4, fill: "#14b8a6" }} />
      </AreaChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#8b5cf6" }} />
        <span style={{ fontSize: "14px", color: "#6b7280" }}>Mood Score</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#14b8a6" }} />
        <span style={{ fontSize: "14px", color: "#6b7280" }}>Sleep Hours</span>
      </div>
    </div>
  </motion.div>
);

export default MoodChart;
