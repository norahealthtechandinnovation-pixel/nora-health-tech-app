import React from 'react';
import {
  ShieldCheck,
  Target,
  Eye,
  ExternalLink,
  Mail,
  Globe2,
  Award,
  Layers,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { AppSection } from '../../types';
import { NoraLogo } from '../common/NoraLogo';

interface AboutSectionProps {
  onNavigate: (section: AppSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-8">
      {/* Header with Official Logo & Corporate Identity */}
      <div className="bg-white rounded-xl border border-slate-200 border-t-4 border-t-[#0b2545] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#008489]">Company Profile</span>
              <span aria-hidden="true">·</span>
              <span>Corporate Identity</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] tracking-tight">
              About NORA Health Tech & Innovation
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {COMPANY_INFO.tagline} A forward-thinking health technology organization focused on advancing healthcare through artificial intelligence, health data, public health intelligence, health policy, research, and digital innovation.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-100 self-center sm:self-start">
            <NoraLogo size="lg" showText={false} />
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-[#008489]">
            <Target className="w-5 h-5" />
            <h3 className="text-base font-bold text-[#0b2545]">Our Mission</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {COMPANY_INFO.mission}
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-[#008489]">
            <Eye className="w-5 h-5" />
            <h3 className="text-base font-bold text-[#0b2545]">Our Vision</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {COMPANY_INFO.vision}
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-[#0b2545]">Our Core Values</h2>
          <p className="text-xs text-slate-500">
            The principles that govern our scientific research, engineering architectures, and global partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMPANY_INFO.values.map((val, idx) => (
            <div key={idx} className="p-5 bg-white rounded-lg border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-[#008489]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <h4 className="text-sm font-bold text-[#0b2545]">{val.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Identity & Engagement - Clean Light Card with Official Website Link */}
      <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-[#0b2545]">Partner with NORA Health Tech & Innovation</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              We collaborate with health ministries, academic medical centers, hospital systems, and global researchers.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-[#0b2545] hover:bg-[#07172b] text-white font-semibold text-xs rounded transition-colors whitespace-nowrap self-start sm:self-auto shadow-xs"
          >
            Get in Touch
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1">
            <span className="text-slate-500 block text-[11px] font-semibold uppercase tracking-wider">Primary Contact</span>
            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="font-mono text-[#008489] hover:underline font-semibold text-xs break-all block"
            >
              {COMPANY_INFO.contactEmail}
            </a>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1">
            <span className="text-slate-500 block text-[11px] font-semibold uppercase tracking-wider">Official Website</span>
            <a
              href={COMPANY_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0b2545] hover:text-[#008489] hover:underline flex items-center gap-1.5 font-mono text-xs font-semibold break-all"
            >
              <span className="truncate">sites.google.com/view/nora-health-tech-innovation/home</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            </a>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1">
            <span className="text-slate-500 block text-[11px] font-semibold uppercase tracking-wider">Application Edition</span>
            <span className="text-slate-700 font-mono font-medium block">v1.0.0 (Official PWA)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
