import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  BarChart3,
  LogOut,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'sales', label: 'Sales & Orders', icon: ShoppingCart },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'users', label: 'User Directory', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 h-full border-r border-nexus-line flex flex-col bg-nexus-bg z-20">
      <div className="p-6 border-b border-nexus-line">
        <h1 className="text-xl font-extrabold tracking-tight flex items-center gap-3">
          <div className="w-9 h-9 bg-nexus-accent rounded-lg flex items-center justify-center text-white text-lg">
            N
          </div>
          <span className="uppercase italic">Nexus<span className="text-nexus-accent not-italic">Core</span></span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {menuItems.map((item) => (
          <button
            id={`nav-${item.id}`}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all group relative rounded-xl ${
              activeTab === item.id 
                ? 'bg-nexus-accent text-white shadow-lg shadow-indigo-500/20' 
                : 'text-slate-500 hover:bg-white hover:text-nexus-ink'
            }`}
          >
            <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-nexus-ink'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-nexus-line">
        <div className="bg-slate-100 rounded-2xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-black text-nexus-accent border border-white">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase truncate text-slate-800">John Doe</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Senior Auditor</p>
          </div>
          <LogOut className="w-3 h-3 text-slate-300 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
}
