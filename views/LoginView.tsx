
import React from 'react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-in fade-in duration-700 bg-black">
      <div className="w-full max-w-md space-y-12 text-center">
        <div>
          <h1 className="text-7xl font-black italic tracking-tighter bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent">
            MNFP
          </h1>
          <p className="text-zinc-600 font-bold tracking-[0.3em] uppercase text-[10px] mt-2">
            Premium Business Ecosystem
          </p>
        </div>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="အီးမေးလ်" 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-white transition-all text-white placeholder-zinc-600"
          />
          <input 
            type="password" 
            placeholder="လျှို့ဝှက်နံပါတ်" 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-white transition-all text-white placeholder-zinc-600"
          />
          <button 
            onClick={onLogin}
            className="w-full bg-white text-black font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5"
          >
            SIGN IN
          </button>
        </div>
        <p className="text-zinc-500 text-xs">
          Forgot password? <span className="text-white cursor-pointer font-bold">Get Help</span>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
