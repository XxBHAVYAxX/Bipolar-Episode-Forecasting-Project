import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import MoodLogs from "./components/MoodLogs";
import ForecastExplorer from "./components/ForecastExplorer";
import Settings from "./components/Settings";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mood-logs" element={<MoodLogs />} />
        <Route path="/forecast" element={<ForecastExplorer />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
