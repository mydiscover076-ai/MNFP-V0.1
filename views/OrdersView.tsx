
import React from 'react';
import { Truck, PackageCheck, Clock, MapPin } from 'lucide-react';
import { Order } from '../types';

const OrdersView: React.FC = () => {
  const orders: Order[] = [
    { id: 'MNFP-88902', item: 'Platinum Suite Access', status: 'In Transit', date: 'Oct 24, 2024' },
    { id: 'MNFP-77121', item: 'Executive Hardware Kit', status: 'Delivered', date: 'Oct 12, 2024' },
    { id: 'MNFP-66230', item: 'Monthly Business Pro', status: 'Pending', date: 'Oct 30, 2024' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Transit': return 'text-blue-500';
      case 'Delivered': return 'text-green-500';
      case 'Processing': return 'text-yellow-500';
      default: return 'text-zinc-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'In Transit': return <Truck className="w-5 h-5" />;
      case 'Delivered': return <PackageCheck className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter">logistics</h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-zinc-900/50 p-6 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl bg-white/5 flex items-center justify-center ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight">{order.item}</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-black">{order.id}</p>
                </div>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            
            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mb-4">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  order.status === 'Delivered' ? 'w-full bg-green-500' : 
                  order.status === 'In Transit' ? 'w-2/3 bg-blue-500 animate-pulse' : 'w-1/4 bg-zinc-600'
                }`}
              ></div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-zinc-500">
              <div className="flex items-center gap-1 uppercase font-bold">
                <MapPin size={10} />
                <span>Warehouse #3</span>
              </div>
              <span className="font-bold">{order.date}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-4 border border-white/5 bg-zinc-900/30 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
        View Order History
      </button>
    </div>
  );
};

export default OrdersView;
