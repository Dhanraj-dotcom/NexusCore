import React, { useState } from 'react';
import { products } from '../constants';
import { 
  Plus, 
  Filter, 
  Download, 
  Search, 
  MoreVertical,
  AlertCircle,
  CheckCircle2,
  XCircle,
  FileSpreadsheet
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Search & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
        <div className="relative flex-1 min-w-[400px]">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="FILTER ASSETS BY SKU, NAME, OR CATEGORY..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 px-12 py-3.5 text-[10px] font-black tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all rounded-2xl shadow-sm uppercase"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
            <Filter className="w-3.5 h-3.5" /> Classification
          </button>
          <button className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
            <Plus className="w-3.5 h-3.5" /> Register Item
          </button>
        </div>
      </div>

      {/* Inventory Table Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60 w-16">Index</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60">Asset Identifier</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60">Classification</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60 text-right">Unit Value</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60 text-center">Stock Node</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60">System Integrity</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest opacity-60 w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map((product, idx) => (
                <tr key={product.id} className="hover:bg-indigo-50/30 transition-colors group">
                  <td className="p-5 text-[10px] font-black text-slate-300">{(idx + 1).toString().padStart(3, '0')}</td>
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-800 tracking-tight">{product.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase mt-0.5 tracking-tighter">{product.sku}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="text-[9px] font-black border border-slate-200 px-2.5 py-1 bg-slate-50 uppercase tracking-widest rounded-lg text-slate-500 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-colors">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-5 text-sm font-black text-slate-900 text-right tracking-tighter">${product.price.toFixed(2)}</td>
                  <td className="p-5">
                    <div className="flex flex-col items-center gap-1.5 leading-none">
                      <span className={`text-sm font-black ${product.stock < 20 ? 'text-amber-600' : 'text-slate-900'}`}>
                        {product.stock}
                      </span>
                      <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${product.stock > 50 ? 'bg-indigo-500' : product.stock > 0 ? 'bg-amber-500' : 'bg-red-500'}`} 
                          style={{ width: `${Math.min(product.stock, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        product.status === 'In Stock' ? 'bg-green-500' :
                        product.status === 'Low Stock' ? 'bg-amber-500' : 'bg-red-500'
                      }`} />
                      <span className={`text-[10px] font-black uppercase tracking-[0.1em] ${
                        product.status === 'In Stock' ? 'text-green-600' :
                        product.status === 'Low Stock' ? 'text-amber-600' :
                        'text-red-500'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-5">
                    <button className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-slate-900 transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredProducts.length === 0 && (
          <div className="p-24 text-center space-y-6">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl mx-auto flex items-center justify-center">
              <FileSpreadsheet className="w-10 h-10 text-slate-200" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-300">Null registry results retrieved</p>
          </div>
        )}
      </div>

      {/* Summary Bento Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Aggregate Portfolio Value', value: '$1.84M', trend: '+1.2%', trendUp: true },
          { label: 'Operational Health Index', value: '92%', trend: '-0.4%', trendUp: false },
          { label: 'Active Service Keys', value: '1,245', trend: 'STABLE', trendUp: true }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-colors">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">{stat.value}</p>
            </div>
            <div className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase ${stat.trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              {stat.trend}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
