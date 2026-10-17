import React from 'react';
import { Search, Sliders, Menu, X, ExternalLink } from 'lucide-react';
import { AppSection } from '../../types';
import { PWAInstallButton } from './PWAInstallButton';
import { COMPANY_INFO } from '../../data/companyData';
import { NoraLogo } from './NoraLogo';

interface HeaderProps {
  activeSection: AppSection;
  onSelectSection: (section: AppSection) => void;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenSearch,
  onOpenSettings,
  mobileMenuOpen,
  onToggleMobileMenu,
}) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white text-slate-800 border-b border-slate-200 shadow-xs flex items-center justify-between px-4 sm:px-6 gap-4 lg:gap-8 transition-colors">
      {/* Zone 1: Official Logo + Company Wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 text-slate-600 hover:text-[#0b2545] hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <NoraLogo
          size="sm"
          showText={true}
          showTagline={true}
          variant="light"
          onClick={() => onSelectSection('home')}
        />
      </div>

      {/* Zone 2: Clean single-line text navigation links matching website style */}
      <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-600">
        <button
          onClick={() => onSelectSection('home')}
          className={`transition-colors whitespace-nowrap shrink-0 py-1.5 hover:text-[#0b2545] ${
            activeSection === 'home'
              ? 'text-[#0b2545] border-b-2 border-[#0b2545] font-bold'
              : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={() => onSelectSection('about')}
          className={`transition-colors whitespace-nowrap shrink-0 py-1.5 hover:text-[#0b2545] ${
            activeSection === 'about'
              ? 'text-[#0b2545] border-b-2 border-[#0b2545] font-bold'
              : ''
          }`}
        >
          About NORA
        </button>
        <button
          onClick={() => onSelectSection('work')}
          className={`transition-colors whitespace-nowrap shrink-0 py-1.5 hover:text-[#0b2545] ${
            activeSection === 'work'
              ? 'text-[#0b2545] border-b-2 border-[#0b2545] font-bold'
              : ''
          }`}
        >
          Our Work
        </button>
        <button
          onClick={() => onSelectSection('products')}
          className={`transition-colors whitespace-nowrap shrink-0 py-1.5 hover:text-[#0b2545] ${
            activeSection === 'products'
              ? 'text-[#0b2545] border-b-2 border-[#0b2545] font-bold'
              : ''
          }`}
        >
          Products & Innovations
        </button>
        <button
          onClick={() => onSelectSection('news')}
          className={`transition-colors whitespace-nowrap shrink-0 py-1.5 hover:text-[#0b2545] ${
            activeSection === 'news'
              ? 'text-[#0b2545] border-b-2 border-[#0b2545] font-bold'
              : ''
          }`}
        >
          News & Insights
        </button>
        <button
          onClick={() => onSelectSection('contact')}
          className={`transition-colors whitespace-nowrap shrink-0 py-1.5 hover:text-[#0b2545] ${
            activeSection === 'contact'
              ? 'text-[#0b2545] border-b-2 border-[#0b2545] font-bold'
              : ''
          }`}
        >
          Contact & Social
        </button>
      </nav>

      {/* Zone 3: Actions + Search, Official Website link, PWA, and Settings */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        <a
          href={COMPANY_INFO.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#0b2545] bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition-colors"
          title="Visit official NORA website"
        >
          <span>Official Website</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
        </a>

        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 rounded border border-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2545]"
          title="Search company work, products, and news (Cmd+K)"
        >
          <Search className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden lg:inline text-[10px] text-slate-500 font-mono bg-white px-1 py-0.5 rounded border border-slate-200">
            ⌘K
          </kbd>
        </button>

        <PWAInstallButton variant="header" />

        <button
          onClick={onOpenSettings}
          className="p-2 text-slate-600 hover:text-[#0b2545] hover:bg-slate-100 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2545]"
          title="App preferences & company information"
        >
          <Sliders className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
