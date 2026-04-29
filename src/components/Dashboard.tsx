import React from 'react';
import { products, sales } from '../constants';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign, 
  ShoppingCart, 
  ArrowUpRight,
  MoreHorizontal,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'GROSS REVENUE', value: '$1.2M', change: '+12.5%', trend: 'up', icon: DollarSign },
  { label: 'STORED UNITS', value: '42,501', change: '-2.1%', trend: 'down', icon: Package },
  { label: 'ACTIVE ORDERS', value: '1,204', change: '+8.4%', trend: 'up', icon: ShoppingCart },
  { label: 'CONVERSION', value: '4.2%', change: '+0.5%', trend: 'up', icon: TrendingUp },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-6 h-full min-h-[700px]">
      
      {/* Primary Financial Card - Bento Style */}
      <motion.div
        className="col-span-12 lg:col-span-6 row-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between group overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Quarterly Revenue</span>
            <span className="text-green-500 font-black text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> +12.4%
            </span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 mt-2 tracking-tighter">$1,248,500</h2>
          <p className="text-xs text-slate-400 font-bold uppercase mt-2 tracking-widest">Aggregate across all nodes</p>
        </div>
        
        {/* Simple Bar Decor */}
        <div className="flex gap-1.5 h-16 items-end relative z-10">
          {[40, 60, 50, 80, 70, 100, 45, 65, 85, 30].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-indigo-100 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500" 
              style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} 
            />
          ))}
        </div>
        
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-indigo-50 rounded-full opacity-50 blur-3xl" />
      </motion.div>

      {/* Inventory Pulse */}
      <motion.div
        className="col-span-6 lg:col-span-3 row-span-2 bg-indigo-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative z-10">
          <div className="text-xs font-black opacity-70 uppercase tracking-widest mb-1">Stored Units</div>
          <div className="text-4xl font-black tracking-tighter">42,501</div>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-1 bg-white/20 rounded-full overflow-hidden flex-1">
              <div className="w-[85%] h-full bg-white" />
            </div>
            <span className="text-[10px] font-black uppercase">85% CAP</span>
          </div>
          <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black w-max tracking-widest uppercase">
            Optimization: Peak
          </div>
        </div>
        <Package className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
      </motion.div>

      {/* Mini Stat Cards */}
      <motion.div
        className="col-span-6 lg:col-span-3 row-span-1 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active nodes</div>
          <div className="text-2xl font-black text-slate-900">142</div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          <Users className="w-6 h-6" />
        </div>
      </motion.div>

      <motion.div
        className="col-span-6 lg:col-span-3 row-span-1 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SQL Engine</div>
          <div className="text-sm font-black text-green-600 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            ONLINE
          </div>
        </div>
        <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Ver. 15.2</div>
      </motion.div>

      {/* Recent Transactions - Wide Component */}
      <motion.div
        className="col-span-12 lg:col-span-8 row-span-4 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-black text-xl text-slate-900 uppercase tracking-tighter">Recent Ledger Entries</h3>
          <button className="text-indigo-600 text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-1">
            Audit Archive <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-1">
          {sales.map((sale) => (
            <div key={sale.id} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors px-2 rounded-xl group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {sale.amount > 5000 ? '⚡' : '📦'}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{sale.customer}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-0.5">Order {sale.id} • Processed via Node_A</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-black text-sm ${sale.status === 'Cancelled' ? 'text-slate-400' : 'text-slate-900'}`}>
                  {sale.status === 'Completed' || sale.status === 'Pending' ? '+' : ''}${sale.amount.toLocaleString()}
                </div>
                <div className={`text-[9px] uppercase font-black tracking-widest mt-1 ${
                  sale.status === 'Completed' ? 'text-green-600' :
                  sale.status === 'Pending' ? 'text-amber-500' :
                  'text-red-500'
                }`}>
                  {sale.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions Panel */}
      <motion.div
        className="col-span-12 lg:col-span-4 row-span-3 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl shadow-slate-900/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 underline underline-offset-8">System Control</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Reports', icon: '📁' },
              { label: 'HR Portal', icon: '👥' },
              { label: 'Security', icon: '🛡️' }
            ].map((action) => (
              <div key={action.label} className="bg-slate-800 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer border border-slate-700 hover:bg-slate-750 hover:border-slate-600 transition-all group">
                <span className="text-2xl group-hover:scale-110 transition-transform">{action.icon}</span>
                <span className="text-xs font-black uppercase tracking-widest">{action.label}</span>
              </div>
            ))}
            <div className="bg-indigo-600 p-5 rounded-2xl flex flex-col gap-3 cursor-pointer shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all hover:-translate-y-1">
              <span className="text-2xl">🚀</span>
              <span className="text-xs font-black uppercase tracking-widest">New PO</span>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white/5 rounded-xl p-4 flex items-center justify-between border border-white/5">
          <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Core Status</span>
          <span className="text-[10px] font-mono text-green-400 font-bold">STABLE:8080</span>
        </div>
      </motion.div>

      {/* Mini Info Card */}
      <motion.div
        className="col-span-12 lg:col-span-4 row-span-1 bg-indigo-50 rounded-3xl border border-indigo-100 p-6 flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-3xl bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">📍</div>
        <div>
          <div className="text-sm font-black text-indigo-900 uppercase tracking-tighter">Global HQ — Singapore</div>
          <div className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.2em] mt-1">14:28 LOCAL TIME</div>
        </div>
      </motion.div>

    </div>
  );
}
