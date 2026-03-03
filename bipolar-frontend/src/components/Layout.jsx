import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => (
  <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f6fa" }}>
    <Sidebar />
    <div style={{ flex: 1, marginLeft: "256px" }}>
      <Topbar />
      <main style={{ padding: "32px" }}>{children}</main>
    </div>
  </div>
);

export default Layout;
