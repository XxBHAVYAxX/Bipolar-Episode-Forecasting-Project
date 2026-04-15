import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children, user, onLogout }) => (
  <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #e4ecfe 100%)" }}>
    <Sidebar />
    <div style={{ flex: 1, marginLeft: "256px", display: "flex", flexDirection: "column" }}>
      <Topbar user={user} onLogout={onLogout} />
      <main style={{ padding: "32px", flex: 1 }}>{children}</main>
    </div>
  </div>
);

export default Layout;
