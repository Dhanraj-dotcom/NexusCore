import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Bell, HelpCircle, Calendar } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
}

export default function Layout({ children, activeTab }: LayoutProps) {
  const titles: Record<string, string> = {
    dashboard: 'Mission Control',
    inventory: 'Inventory register',
    sales: 'Sales Operations',
    analytics: 'Performance Metrics',
    users: 'Personnel Directory',
    settings: 'System Configuration',
  };

  return (
    <div className="flex-1 h-full flex flex-col relative overflow-hidden bg-slate-50">
      {/* Top Bar */}
      <header className="h-20 flex items-center justify-between px-10 bg-slate-50 z-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            {titles[activeTab]}
          </h2>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            LIVE LINK: NEXUS_CORE_V2.4
            <span className="mx-2 text-slate-300">|</span>
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-nexus-accent transition-colors" />
            <input 
              type="text" 
              placeholder="GLOBAL SEARCH..." 
              className="bg-white border border-slate-200 px-10 py-2.5 text-[10px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-nexus-accent/20 focus:border-nexus-accent w-64 transition-all rounded-xl shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
              <Bell className="w-4 h-4 text-slate-600" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-nexus-accent rounded-full border-2 border-white" />
            </button>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
              <HelpCircle className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-10 pb-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
