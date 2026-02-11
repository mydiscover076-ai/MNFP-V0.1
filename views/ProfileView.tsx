
import React from 'react';
import { ChevronRight, Settings, CreditCard, Shield, LogOut, Award } from 'lucide-react';

interface ProfileViewProps {
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ onLogout }) => {
  const menuItems = [
    { label: 'Business Settings', icon: <Settings size={18} />, sub: 'Organization & Team' },
    { label: 'Premium Billing', icon: <CreditCard size={18} />, sub: 'Manage methods' },
    { label: 'Security Hub', icon: <Shield size={18} />, sub: 'PIN & Keys' },
    { label: 'Founder Rewards', icon: <Award size={18} />, sub: 'Platinum Perks' },
  ];

  return (
    <div className="p-8 text-center space-y-10 animate-in fade-in duration-700">
      <div className="relative inline-block">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-white mx-auto p-1 border-4 border-black shadow-2xl">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="https://picsum.photos/seed/user-main/300/300" 
              alt="Profile" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 bg-white text-black p-2 rounded-full shadow-xl">
          <Award size={16} />
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase">Pyae Phyo</h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">Platinum Founder</span>
          <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Since 2024</span>
        </div>
      </div>

      <div className="space-y-3">
        {menuItems.map((item, i) => (
          <button 
            key={i}
            className="w-full bg-zinc-900/50 p-5 rounded-[2.5rem] border border-white/5 flex items-center justify-between hover:bg-zinc-800/50 transition-all group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="text-zinc-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-[10px] text-zinc-500">{item.sub}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-zinc-700 group-hover:text-white transition-colors" />
          </button>
        ))}
        
        <button 
          onClick={onLogout}
          className="w-full py-6 text-red-500 text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 mt-4 hover:bg-red-500/5 rounded-3xl transition-colors"
        >
          <LogOut size={16} />
          Sign Out of Hub
        </button>
      </div>

      <p className="text-[8px] text-zinc-700 font-bold uppercase tracking-[0.4em]">MNFP Hub v4.2.0 • Secure Session</p>
    </div>
  );
};

export default ProfileView;
