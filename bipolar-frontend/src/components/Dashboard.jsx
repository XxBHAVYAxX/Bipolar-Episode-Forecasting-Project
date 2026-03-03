import { motion } from "framer-motion";
import { Shield, AlertTriangle, HeartPulse, Moon, Zap } from "lucide-react";
import MoodChart from "./MoodChart";

const gradients = {
  purple: "linear-gradient(135deg, #8b5cf6, #a855f7)",
  orange: "linear-gradient(135deg, #f59e0b, #ef4444)",
  green: "linear-gradient(135deg, #10b981, #14b8a6)",
};

const StatCard = ({ title, value, gradient, delay = 0, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -4, scale: 1.02 }}
    style={{
      borderRadius: "16px", padding: "24px", color: "white", cursor: "pointer",
      background: gradient, minHeight: "140px", display: "flex", flexDirection: "column",
      justifyContent: "space-between", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.15)"
    }}
  >
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <p style={{ fontSize: "14px", fontWeight: 500, opacity: 0.9 }}>{title}</p>
      {icon && <div style={{ opacity: 0.7 }}>{icon}</div>}
    </div>
    <p style={{ fontSize: "30px", fontWeight: "bold", marginTop: "8px", fontFamily: "'Space Grotesk', sans-serif" }}>{value}</p>
  </motion.div>
);

const InfoCard = ({ title, value, color = "#8b5cf6", delay = 0, icon }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
    style={{
      backgroundColor: "white", borderRadius: "16px", padding: "20px",
      boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)", cursor: "pointer"
    }}
  >
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <p style={{ fontSize: "14px", fontWeight: 500, color: "#6b7280" }}>{title}</p>
      {icon && <div style={{ color: "#9ca3af" }}>{icon}</div>}
    </div>
    <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "8px", color, fontFamily: "'Space Grotesk', sans-serif" }}>{value}</p>
  </motion.div>
);

const Dashboard = () => (
  <>
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "32px", fontFamily: "'Space Grotesk', sans-serif" }}
    >
      Dashboard
    </motion.h1>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "32px" }}>
      <StatCard title="Mood Stability" value="Stable" gradient={gradients.purple} delay={0.1} icon={<Shield size={20} />} />
      <StatCard title="Mania Probability" value="18%" gradient={gradients.orange} delay={0.2} icon={<AlertTriangle size={20} />} />
      <StatCard title="Depression Risk" value="42%" gradient={gradients.green} delay={0.3} icon={<HeartPulse size={20} />} />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
      <MoodChart />
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <InfoCard title="Sleep Quality" value="7.4 hrs" color="#14b8a6" delay={0.4} icon={<Moon size={16} />} />
        <InfoCard title="Next Episode Risk" value="Low" color="#14b8a6" delay={0.5} icon={<Zap size={16} />} />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          style={{ backgroundColor: "white", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)" }}
        >
          <p style={{ fontSize: "14px", fontWeight: 500, color: "#6b7280" }}>Weekly Summary</p>
          <p style={{ fontSize: "14px", color: "#374151", marginTop: "8px", lineHeight: 1.6 }}>
            Your mood has been relatively stable this week. Sleep patterns show improvement. Keep up with your routines! 💪
          </p>
        </motion.div>
      </div>
    </div>
  </>
);

export default Dashboard;
