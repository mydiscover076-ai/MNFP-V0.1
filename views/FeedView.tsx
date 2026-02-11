
import React from 'react';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';

const FeedView: React.FC = () => {
  return (
    <div className="p-3 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-500">
      {[1, 2].map((i) => (
        <div key={i} className="relative h-[70vh] bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group">
          <img 
            src={`https://picsum.photos/seed/${i + 10}/600/1000`} 
            alt="Business Feed"
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.2]"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
            <Play className="w-20 h-20 text-white fill-white" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 border border-white/20 p-0.5 overflow-hidden">
                 <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Avatar" className="w-full h-full rounded-full" />
              </div>
              <div>
                <span className="font-bold text-sm block">MNFP Store Official</span>
                <span className="text-[10px] text-zinc-400">Sponsored</span>
              </div>
            </div>
            <h3 className="font-bold text-lg leading-tight">Elite Founders Collection 2026 💎</h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              Experience the pinnacle of business lifestyle. Join the ecosystem today.
            </p>
          </div>

          <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
            <button className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold">12.{i}k</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold">34{i}</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-zinc-400">Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedView;
