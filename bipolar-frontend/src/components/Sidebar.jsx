import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, BookHeart, TrendingUp, Settings, Brain, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/mood-logs", label: "Mood Logs", icon: BookHeart },
  { to: "/forecast", label: "Forecast", icon: TrendingUp },
  { to: "/chat", label: "AI Chat", icon: MessageSquare },
  { to: "/settings", label: "Settings", icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside style={{
      position: "fixed", left: 0, top: 0, height: "100vh", width: "256px",
      backgroundColor: "#1e2235", color: "#b0b5c9", display: "flex", flexDirection: "column", zIndex: 50
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "24px" }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "12px",
          background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Brain style={{ width: "20px", height: "20px", color: "white" }} />
        </div>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>Bipolar AI</h1>
      </div>

      <nav style={{ flex: 1, padding: "0 12px", marginTop: "16px" }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink key={item.to} to={item.to} style={{ textDecoration: "none", display: "block", marginBottom: "4px" }}>
              <motion.div
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "12px 16px", borderRadius: "12px", fontSize: "14px", fontWeight: 500,
                  color: isActive ? "white" : "#8b90a5",
                  backgroundColor: isActive ? "#8b5cf6" : "transparent",
                  transition: "background-color 0.2s"
                }}
                whileHover={{ x: 4, backgroundColor: isActive ? "#8b5cf6" : "#2a2f47" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon style={{ width: "20px", height: "20px" }} />
                {item.label}
              </motion.div>
            </NavLink>
          );
        })}
      </nav>

      <div style={{ padding: "0 16px 24px" }}>
        <div style={{
          borderRadius: "12px", background: "linear-gradient(135deg, #3b82f6, #6366f1)", padding: "16px"
        }}>
          <p style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>Daily Check-in</p>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "white", marginTop: "4px", fontFamily: "'Space Grotesk', sans-serif" }}>How are you feeling?</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
