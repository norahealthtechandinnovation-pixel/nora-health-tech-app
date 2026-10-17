import React from 'react';
import {
  Home,
  Info,
  Briefcase,
  Box,
  Newspaper,
  Mail,
  Sliders,
  ExternalLink,
  ChevronRight,
  BrainCircuit,
  Database,
  Activity,
  ScrollText,
  Microscope,
  Cpu,
} from 'lucide-react';
import { AppSection, WorkAreaId } from '../../types';
import { COMPANY_INFO, WORK_AREAS } from '../../data/companyData';
import { PWAInstallButton } from './PWAInstallButton';
import { NoraLogo } from './NoraLogo';

interface SidebarProps {
  activeSection: AppSection;
  onSelectSection: (section: AppSection, workAreaId?: WorkAreaId) => void;
  mobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
  selectedWorkAreaId?: WorkAreaId;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  mobileMenuOpen,
  onCloseMobileMenu,
  selectedWorkAreaId,
}) => {
  const primaryNavItems: { id: AppSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About NORA', icon: <Info className="w-4 h-4" /> },
    { id: 'work', label: 'Our Work', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'products', label: 'Products & Innovations', icon: <Box className="w-4 h-4" /> },
    { id: 'news', label: 'News & Insights', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact & Social', icon: <Mail className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings & Info', icon: <Sliders className="w-4 h-4" /> },
  ];

  const getWorkIcon = (id: WorkAreaId) => {
    switch (id) {
      case 'ai-digital-health':
        return <BrainCircuit className="w-3.5 h-3.5" />;
      case 'health-data':
        return <Database className="w-3.5 h-3.5" />;
      case 'public-health':
        return <Activity className="w-3.5 h-3.5" />;
      case 'health-policy':
        return <ScrollText className="w-3.5 h-3.5" />;
      case 'research-evidence':
        return <Microscope className="w-3.5 h-3.5" />;
      case 'health-tools':
        return <Cpu className="w-3.5 h-3.5" />;
    }
  };

  const handleNavClick = (section: AppSection, workId?: WorkAreaId) => {
    onSelectSection(section, workId);
    onCloseMobileMenu();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobileMenu}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white text-slate-700 border-r border-slate-200 flex flex-col justify-between transition-transform duration-200 ease-out lg:static lg:translate-x-0 shadow-sm lg:shadow-none ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Top Brand Block with Official Logo */}
          <div className="p-4 border-b border-slate-100 bg-white">
            <NoraLogo
              size="md"
              showText={true}
              showTagline={true}
              variant="light"
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Primary Navigation */}
          <div className="px-3 py-4 space-y-1">
            <div className="px-3 pb-2 text-[10px] uppercase tracking-wider font-bold text-slate-400">
              Company Navigation
            </div>

            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <div key={item.id} className="space-y-0.5">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md transition-colors text-left group ${
                      isActive
                        ? 'bg-[#0b2545] text-white shadow-xs'
                        : 'text-slate-700 hover:text-[#0b2545] hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#0b2545]'}>
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.id === 'work' && (
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-white' : 'text-slate-400'
                        } ${activeSection === 'work' ? 'rotate-90' : ''}`}
                      />
                    )}
                  </button>

                  {/* Sub-navigation for Our Work when on 'work' section */}
                  {item.id === 'work' && activeSection === 'work' && (
                    <div className="ml-5 pl-3 border-l-2 border-slate-200 py-1 space-y-1">
                      {WORK_AREAS.map((wa) => {
                        const isSubActive = selectedWorkAreaId === wa.id;
                        return (
                          <button
                            key={wa.id}
                            onClick={() => handleNavClick('work', wa.id)}
                            className={`w-full flex items-center gap-2 px-2 py-1.5 text-[11px] font-medium rounded text-left transition-colors truncate ${
                              isSubActive
                                ? 'text-[#0b2545] bg-slate-100 font-bold'
                                : 'text-slate-600 hover:text-[#0b2545] hover:bg-slate-50'
                            }`}
                          >
                            <span className={isSubActive ? 'text-[#008489]' : 'text-slate-400'}>
                              {getWorkIcon(wa.id)}
                            </span>
                            <span className="truncate">{wa.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick External Actions & PWA Install */}
          <div className="px-3 py-3 mt-auto border-t border-slate-100 space-y-2 bg-slate-50/50">
            <PWAInstallButton variant="sidebar" />

            <a
              href={COMPANY_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#0b2545] bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-colors text-left shadow-2xs"
            >
              <span>Official NORA Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-[#0b2545] font-bold">NORA App</span>
            <span>·</span>
            <span className="font-mono text-[10px]">v1.0.0</span>
          </div>
          <span className="font-mono text-[10px] text-[#008489] font-semibold">Standalone PWA</span>
        </div>
      </aside>
    </>
  );
};
