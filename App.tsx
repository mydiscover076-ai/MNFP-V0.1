
import React, { useState, useEffect } from 'react';
import { AppView, AppTab } from './types';
import LoginView from './views/LoginView';
import PinView from './views/PinView';
import MainLayout from './layouts/MainLayout';
import FeedView from './views/FeedView';
import ShopView from './views/ShopView';
import ChatView from './views/ChatView';
import OrdersView from './views/OrdersView';
import ProfileView from './views/ProfileView';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('login');
  const [tab, setTab] = useState<AppTab>('feed');

  const renderContent = () => {
    switch (tab) {
      case 'feed': return <FeedView />;
      case 'shop': return <ShopView />;
      case 'chat': return <ChatView />;
      case 'orders': return <OrdersView />;
      case 'profile': return <ProfileView onLogout={() => setView('login')} />;
      default: return <FeedView />;
    }
  };

  if (view === 'login') {
    return <LoginView onLogin={() => setView('pin')} />;
  }

  if (view === 'pin') {
    return <PinView onVerify={() => setView('main')} onBack={() => setView('login')} />;
  }

  return (
    <MainLayout currentTab={tab} onTabChange={setTab}>
      {renderContent()}
    </MainLayout>
  );
};

export default App;
