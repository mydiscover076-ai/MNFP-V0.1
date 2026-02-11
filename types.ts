
export type AppView = 'login' | 'pin' | 'main';
export type AppTab = 'feed' | 'shop' | 'chat' | 'orders' | 'profile';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Order {
  id: string;
  item: string;
  status: 'In Transit' | 'Processing' | 'Delivered' | 'Pending';
  date: string;
}
