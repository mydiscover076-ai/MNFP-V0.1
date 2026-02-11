
import React, { useState } from 'react';

interface PinViewProps {
  onVerify: () => void;
  onBack: () => void;
}

const PinView: React.FC<PinViewProps> = ({ onVerify, onBack }) => {
  const [pin, setPin] = useState('');

  const handleVerify = () => {
    if (pin.length === 6) {
      onVerify();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-in slide-in-from-right-10 duration-500 bg-black">
      <div className="text-center space-y-8 w-full max-w-xs">
        <h2 className="text-3xl font-black italic tracking-tight">SECURITY PIN</h2>
        <p className="text-zinc-500 text-sm">Enter your 6-digit secure access pin</p>
        <input 
          type="password" 
          maxLength={6} 
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="bg-transparent border-b-2 border-white/20 text-center text-5xl tracking-[0.4em] w-full focus:outline-none focus:border-white py-4 transition-all"
          autoFocus
        />
        <div className="space-y-4">
          <button 
            onClick={handleVerify}
            className="w-full bg-white text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            VERIFY ACCESS
          </button>
          <button 
            onClick={onBack}
            className="w-full text-zinc-500 py-2 text-xs font-bold uppercase tracking-tighter"
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinView;
