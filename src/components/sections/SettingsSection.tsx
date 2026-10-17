import React from 'react';
import {
  Sliders,
  Smartphone,
  Globe,
  Shield,
  Download,
  Info,
  Check,
  Share2,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { AppPreferences } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { PWAInstallButton } from '../common/PWAInstallButton';

interface SettingsSectionProps {
  preferences: AppPreferences;
  onUpdatePreferences: (update: Partial<AppPreferences>) => void;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  preferences,
  onUpdatePreferences,
}) => {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
          <span>Application Controls</span>
          <span aria-hidden="true">·</span>
          <span>Configuration & Deployment</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Settings & App Information
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
          Manage local display preferences, offline Progressive Web App installation, and deployment documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: App Preferences & PWA */}
        <div className="lg:col-span-6 space-y-6">
          {/* PWA Standalone Installation Box */}
          <PWAInstallButton variant="settings" />

          {/* Theme & Display Preferences */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#0b2545] border-b border-slate-100 pb-2">
              Appearance & Layout Preferences
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Theme Palette</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['light', 'dark', 'system'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => onUpdatePreferences({ theme: t })}
                      className={`p-2.5 rounded border capitalize font-medium transition-colors ${
                        preferences.theme === t
                          ? 'border-[#0b2545] bg-slate-100 text-[#0b2545] font-bold ring-1 ring-[#0b2545]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {t} Mode
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <label className="flex items-center justify-between p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <span className="font-medium text-slate-700">Compact Density for High-Res Screens</span>
                  <input
                    type="checkbox"
                    checked={preferences.compactDensity}
                    onChange={(e) => onUpdatePreferences({ compactDensity: e.target.checked })}
                    className="rounded border-slate-300 text-[#0b2545] focus:ring-[#0b2545]"
                  />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <span className="font-medium text-slate-700">Respect Reduced Motion</span>
                  <input
                    type="checkbox"
                    checked={preferences.reduceMotion}
                    onChange={(e) => onUpdatePreferences({ reduceMotion: e.target.checked })}
                    className="rounded border-slate-300 text-[#0b2545] focus:ring-[#0b2545]"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Company Legal & Identity Notice with Official Link */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 text-xs">
            <div className="flex items-center gap-2 text-[#008489] font-bold text-sm">
              <Shield className="w-4 h-4" />
              <span className="text-[#0b2545]">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Official Tagline: <strong>{COMPANY_INFO.tagline}</strong>
            </p>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              This software application represents NORA Health Tech & Innovation as a corporate showcase and client-facing digital application for desktop PC and mobile devices.
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-slate-400 text-[11px]">Official Web Portal:</span>
              <a
                href={COMPANY_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008489] hover:underline font-mono text-[11px] font-semibold flex items-center gap-1"
              >
                <span>sites.google.com/view/nora-health-tech-innovation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: How to Publish the App */}
        <div className="lg:col-span-6 p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-xs space-y-5 text-xs text-slate-700">
          <div className="border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>How to Publish & Distribute This Application</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Step-by-step instructions for deploying as a standalone web, desktop, and mobile application
            </p>
          </div>

          <div className="space-y-4 leading-relaxed">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs">
                1. Web & Cloud Hosting (Vercel, Netlify, Cloud Run)
              </span>
              <p className="text-[11px] text-slate-600">
                Run <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">npm run build</code> to generate the optimized production bundle in the <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">dist/</code> folder. Deploy to any static or server host with your organization's custom domain or cloud hosting.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs">
                2. Progressive Web App (PWA) Auto-Installation
              </span>
              <p className="text-[11px] text-slate-600">
                The app includes a fully validated Web App Manifest and Service Worker via <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">vite-plugin-pwa</code>. When users visit on Chrome, Edge, Safari, or Android, they can tap <strong>Install App</strong> to run it in standalone desktop or mobile window mode without browser URL bars.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs">
                3. App Store Distribution (Google Play, Microsoft Store, Apple iOS)
              </span>
              <p className="text-[11px] text-slate-600">
                To package this application for native app stores without rewriting code:
              </p>
              <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-1 pl-1">
                <li>
                  <strong>PWABuilder (pwabuilder.com):</strong> Enter your deployed URL to generate an Android APK / AAB package for the Google Play Store and an MSIX bundle for the Microsoft Store.
                </li>
                <li>
                  <strong>Capacitor / Tauri:</strong> Wrap the <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">dist/</code> directory into native iOS (Xcode) and Android (Android Studio) projects.
                </li>
              </ul>
            </div>

            <div className="p-3 bg-teal-50/70 rounded border border-teal-200/80 text-[11px] text-teal-900">
              <strong>Need assistance with enterprise deployment?</strong> Contact the company owner directly at <span className="font-mono font-semibold">{COMPANY_INFO.contactEmail}</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
