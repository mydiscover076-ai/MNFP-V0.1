
import React from 'react';
import { AppTab } from '../types';
import { Search, Bell, Home, ShoppingBag, MessageCircle, Package, User } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentTab, onTabChange }) => {
  const tabs = [
    { id: 'feed', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { id: 'shop', icon: <ShoppingBag className="w-5 h-5" />, label: 'Shop' },
    { id: 'chat', icon: <MessageCircle className="w-5 h-5" />, label: 'Chat' },
    { id: 'orders', icon: <Package className="w-5 h-5" />, label: 'Orders' },
    { id: 'profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center">
      <header className="sticky top-0 w-full max-w-md bg-black/80 backdrop-blur-xl z-50 px-6 py-5 flex justify-between items-center border-b border-white/5">
        <h1 className="text-2xl font-black italic tracking-tighter">MNFP</h1>
        <div className="flex gap-4 text-zinc-500">
          <button className="hover:text-white transition-colors"><Search className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full border-2 border-black"></span>
          </button>
        </div>
      </header>

      <main className="w-full max-w-md flex-1 pb-28">
        {children}
      </main>

      <nav className="fixed bottom-6 w-[92%] max-w-sm glass rounded-[2.5rem] flex justify-between p-2 z-50 shadow-2xl overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as AppTab)}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
              currentTab === tab.id ? 'bg-white text-black shadow-lg shadow-white/10' : 'text-zinc-500'
            }`}
          >
            {tab.icon}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MainLayout;
