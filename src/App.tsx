import React, { useState, useEffect } from 'react';
import {
  AppSection,
  WorkAreaId,
  ProductItem,
  NewsArticle,
  AppPreferences,
} from './types';
import { COMPANY_INFO, INITIAL_PRODUCTS, INITIAL_NEWS } from './data/companyData';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { AddProductModal } from './components/common/AddProductModal';
import { ArticleReaderModal } from './components/common/ArticleReaderModal';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { OurWorkSection } from './components/sections/OurWorkSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { NewsSection } from './components/sections/NewsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SettingsSection } from './components/sections/SettingsSection';
import {
  Home,
  Info,
  Briefcase,
  Box,
  Newspaper,
  Mail,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const [selectedWorkAreaId, setSelectedWorkAreaId] = useState<WorkAreaId>('ai-digital-health');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  // Products state with local storage persistence
  const [products, setProducts] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem('nora_company_products');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_PRODUCTS;
  });

  const handleAddProduct = (newProduct: ProductItem) => {
    setProducts((prev) => {
      const updated = [newProduct, ...prev];
      try {
        localStorage.setItem('nora_company_products', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  // App preferences
  const [preferences, setPreferences] = useState<AppPreferences>(() => {
    try {
      const saved = localStorage.getItem('nora_company_preferences');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {
      theme: 'dark',
      compactDensity: false,
      reduceMotion: false,
      fontSize: 'standard',
    };
  });

  const handleUpdatePreferences = (update: Partial<AppPreferences>) => {
    setPreferences((prev) => {
      const next = { ...prev, ...update };
      try {
        localStorage.setItem('nora_company_preferences', JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  // Global search keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (section: AppSection, workAreaId?: WorkAreaId) => {
    setActiveSection(section);
    if (workAreaId) {
      setSelectedWorkAreaId(workAreaId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HomeSection
            onNavigate={handleNavigate}
            products={products}
            news={INITIAL_NEWS}
            onReadArticle={setReadingArticle}
          />
        );
      case 'about':
        return <AboutSection onNavigate={handleNavigate} />;
      case 'work':
        return (
          <OurWorkSection
            initialWorkAreaId={selectedWorkAreaId}
            onNavigate={handleNavigate}
          />
        );
      case 'products':
        return (
          <ProductsSection
            products={products}
            onOpenAddModal={() => setAddProductOpen(true)}
          />
        );
      case 'news':
        return (
          <NewsSection
            news={INITIAL_NEWS}
            onReadArticle={setReadingArticle}
          />
        );
      case 'contact':
        return <ContactSection />;
      case 'settings':
        return (
          <SettingsSection
            preferences={preferences}
            onUpdatePreferences={handleUpdatePreferences}
          />
        );
      default:
        return (
          <HomeSection
            onNavigate={handleNavigate}
            products={products}
            news={INITIAL_NEWS}
            onReadArticle={setReadingArticle}
          />
        );
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 ${
        preferences.compactDensity ? 'text-xs' : 'text-sm'
      }`}
    >
      {/* 3-Zone Top Bar Header */}
      <Header
        activeSection={activeSection}
        onSelectSection={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenSettings={() => handleNavigate('settings')}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar & Mobile Drawer */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={handleNavigate}
          mobileMenuOpen={mobileMenuOpen}
          onCloseMobileMenu={() => setMobileMenuOpen(false)}
          selectedWorkAreaId={selectedWorkAreaId}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-20 lg:pb-12">
          {renderActiveSection()}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar on Phones - Matching Clean Brand Theme */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-slate-200 flex items-center justify-around py-1.5 text-[10px] text-slate-500 shadow-lg">
        <button
          onClick={() => handleNavigate('home')}
          className={`flex flex-col items-center py-1 px-2 rounded transition-colors ${
            activeSection === 'home' ? 'text-[#0b2545] font-bold' : 'hover:text-slate-900'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>
        <button
          onClick={() => handleNavigate('about')}
          className={`flex flex-col items-center py-1 px-2 rounded transition-colors ${
            activeSection === 'about' ? 'text-[#0b2545] font-bold' : 'hover:text-slate-900'
          }`}
        >
          <Info className="w-4 h-4 mb-0.5" />
          <span>About</span>
        </button>
        <button
          onClick={() => handleNavigate('work')}
          className={`flex flex-col items-center py-1 px-2 rounded transition-colors ${
            activeSection === 'work' ? 'text-[#0b2545] font-bold' : 'hover:text-slate-900'
          }`}
        >
          <Briefcase className="w-4 h-4 mb-0.5" />
          <span>Work</span>
        </button>
        <button
          onClick={() => handleNavigate('products')}
          className={`flex flex-col items-center py-1 px-2 rounded transition-colors ${
            activeSection === 'products' ? 'text-[#0b2545] font-bold' : 'hover:text-slate-900'
          }`}
        >
          <Box className="w-4 h-4 mb-0.5" />
          <span>Products</span>
        </button>
        <button
          onClick={() => handleNavigate('news')}
          className={`flex flex-col items-center py-1 px-2 rounded transition-colors ${
            activeSection === 'news' ? 'text-[#0b2545] font-bold' : 'hover:text-slate-900'
          }`}
        >
          <Newspaper className="w-4 h-4 mb-0.5" />
          <span>News</span>
        </button>
        <button
          onClick={() => handleNavigate('contact')}
          className={`flex flex-col items-center py-1 px-2 rounded transition-colors ${
            activeSection === 'contact' ? 'text-[#0b2545] font-bold' : 'hover:text-slate-900'
          }`}
        >
          <Mail className="w-4 h-4 mb-0.5" />
          <span>Contact</span>
        </button>
      </div>

      {/* Global Command Palette / Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        news={INITIAL_NEWS}
        onNavigate={handleNavigate}
        onReadArticle={setReadingArticle}
      />

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={addProductOpen}
        onClose={() => setAddProductOpen(false)}
        onAddProduct={handleAddProduct}
      />

      {/* Article Reader Modal */}
      <ArticleReaderModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
      />
    </div>
  );
}
