import { lazy, Suspense, useState } from 'react';
import Header from '@/components/Header/Header';
import Tabs from '@/components/Tabs/Tabs';
import ProfilePanel from '@/components/ProfilePanel/ProfilePanel';
import Footer from '@/components/Footer/Footer';
import '@/App.css';

const Overview = lazy(() => import('./components/Overview/Overview'));
const EmptyTab = lazy(() => import('./components/EmptyTab/EmptyTab'));

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  return (
    <>
      <div className="app-top">
        <Header />
        <Tabs active={activeTab} onChange={setActiveTab} />
      </div>
      <main className="app-main">
        <ProfilePanel />
        <Suspense fallback={<div className="app-loading">Loading…</div>}>
          {activeTab === 'Overview' ? <Overview /> : <EmptyTab name={activeTab} />}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
