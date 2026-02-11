
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ShopView: React.FC = () => {
  const products = [
    { id: 1, name: 'Platinum Desk Set', price: 1200, category: 'Hardware' },
    { id: 2, name: 'Executive Suite Access', price: 500, category: 'Service' },
    { id: 3, name: 'Custom AI Bot', price: 2400, category: 'Digital' },
    { id: 4, name: 'Founder Watch v4', price: 890, category: 'Jewelry' },
    { id: 5, name: 'MNFP Workspace Pro', price: 350, category: 'Subscription' },
    { id: 6, name: 'Business Travel Kit', price: 150, category: 'Accessories' },
  ];

  return (
    <div className="p-6 space-y-8 animate-in slide-in-from-bottom-10 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase">SHOP</h2>
          <p className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">Exclusive MNFP Goods</p>
        </div>
        <ShoppingCart className="w-6 h-6 text-zinc-500" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-zinc-900 rounded-[2.5rem] p-3 border border-white/5 hover:border-white/20 transition-all group">
            <div className="aspect-[4/5] bg-zinc-800 rounded-[2rem] mb-4 overflow-hidden relative">
              <img 
                src={`https://picsum.photos/seed/${product.id + 50}/400/500`} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">
                {product.category}
              </div>
            </div>
            <h4 className="font-bold text-xs truncate mb-1 px-1">{product.name}</h4>
            <div className="flex justify-between items-center mt-3 px-1">
              <span className="text-white font-black text-sm">${product.price}</span>
              <button className="bg-white text-black text-[9px] px-4 py-2 rounded-full font-black uppercase tracking-tighter active:scale-90 transition-transform">
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopView;
