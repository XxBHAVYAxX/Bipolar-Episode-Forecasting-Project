import { User, LogOut, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 32px",
      background: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
      position: "sticky", top: 0, zIndex: 40,
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)"
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#1f2937", fontFamily: "'Space Grotesk', sans-serif" }}>
        Mental Health Monitoring
      </h2>
      
      <div>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "15px", fontWeight: 500, color: "#4b5563" }}>
              Welcome, <strong style={{ color: "#8b5cf6" }}>{user.username}</strong>!
            </span>
            <button 
              onClick={onLogout}
              style={{
                display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
                borderRadius: "12px", background: "rgba(239, 68, 68, 0.1)", color: "#ef4444",
                border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 600,
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)"}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => navigate("/login")}
            style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px",
              borderRadius: "12px", background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              color: "white", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 600,
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)"
            }}
          >
            <LogIn size={16} /> Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Topbar;
