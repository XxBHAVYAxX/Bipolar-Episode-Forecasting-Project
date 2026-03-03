import { User } from "lucide-react";

const Topbar = () => (
  <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
    <h2 className="text-lg font-semibold text-gray-900">Mental Health Monitoring</h2>
    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700">
      <User className="w-4 h-4" />
      User
    </button>
  </header>
);

export default Topbar;
