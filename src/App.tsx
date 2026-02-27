import { Suspense, lazy } from 'react';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Service = lazy(() => import('./pages/Service'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>NovaLend | Merchant Lending Platform</title>
          <meta
            name="description"
            content="NovaLend helps merchants launch embedded lending products with better risk controls and faster funding."
          />
        </Helmet>
        <main className="wrapper flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-16 text-slate-300">Loading content…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </main>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
