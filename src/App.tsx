/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'sales':
      case 'analytics':
      case 'users':
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-6 opacity-30">
            <div className="w-24 h-24 border-2 border-dashed border-nexus-line rounded-full flex items-center justify-center">
              <span className="font-mono text-xs">MODULE</span>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold tracking-tighter uppercase">{activeTab} INACTIVE</h2>
              <p className="text-xs font-serif italic mt-2">DEPLOYMENT OF THIS MODULE IS PENDING BACKEND SYNC</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-nexus-bg select-none">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Layout activeTab={activeTab}>
        {renderContent()}
      </Layout>
    </div>
  );
}

