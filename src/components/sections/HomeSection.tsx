import React from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Database,
  Activity,
  ScrollText,
  Microscope,
  Cpu,
  ExternalLink,
  Box,
  Newspaper,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { AppSection, WorkAreaId, ProductItem, NewsArticle } from '../../types';
import { COMPANY_INFO, WORK_AREAS } from '../../data/companyData';
import { NoraLogo } from '../common/NoraLogo';

interface HomeSectionProps {
  onNavigate: (section: AppSection, workAreaId?: WorkAreaId) => void;
  products: ProductItem[];
  news: NewsArticle[];
  onReadArticle: (article: NewsArticle) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  products,
  news,
  onReadArticle,
}) => {
  const getWorkIcon = (id: WorkAreaId) => {
    switch (id) {
      case 'ai-digital-health':
        return <BrainCircuit className="w-5 h-5 text-[#008489]" />;
      case 'health-data':
        return <Database className="w-5 h-5 text-[#008489]" />;
      case 'public-health':
        return <Activity className="w-5 h-5 text-[#008489]" />;
      case 'health-policy':
        return <ScrollText className="w-5 h-5 text-[#008489]" />;
      case 'research-evidence':
        return <Microscope className="w-5 h-5 text-[#008489]" />;
      case 'health-tools':
        return <Cpu className="w-5 h-5 text-[#008489]" />;
    }
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Branded Official Hero Card - Clean White & Navy aesthetic matching the website */}
      <div className="bg-white rounded-xl border border-slate-200 border-t-4 border-t-[#0b2545] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 text-[#0b2545] text-xs font-semibold tracking-wide">
              <span>Official Company Application</span>
              <span aria-hidden="true">·</span>
              <span>{COMPANY_INFO.name}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0b2545] leading-tight">
              Building the Future of Healthcare
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#008489]">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Official Logo Display with preserved original proportions */}
          <div className="shrink-0 flex items-center justify-center p-3 bg-slate-50/80 rounded-xl border border-slate-100 self-center sm:self-start">
            <NoraLogo size="xl" showText={false} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
          <button
            onClick={() => onNavigate('work')}
            className="px-4 py-2.5 bg-[#0b2545] hover:bg-[#07172b] active:bg-[#050f1c] text-white font-semibold text-xs sm:text-sm rounded transition-colors flex items-center gap-2 shadow-xs"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('products')}
            className="px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0b2545] font-semibold text-xs sm:text-sm rounded border border-slate-300 transition-colors flex items-center gap-2 shadow-2xs"
          >
            <Box className="w-4 h-4 text-[#008489]" />
            <span>Products & Innovations</span>
          </button>

          <a
            href={COMPANY_INFO.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0b2545] font-medium text-xs sm:text-sm rounded border border-slate-200 transition-colors flex items-center gap-1.5 ml-auto"
          >
            <span>Visit Official Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* 3 Core Pillars From Official Website */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0b2545] flex items-center justify-center mb-1">
            <BrainCircuit className="w-5 h-5 text-[#008489]" />
          </div>
          <h3 className="text-base font-bold text-[#0b2545]">AI & Digital Health</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Developing intelligent technologies and digital solutions for better healthcare.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0b2545] flex items-center justify-center mb-1">
            <Cpu className="w-5 h-5 text-[#008489]" />
          </div>
          <h3 className="text-base font-bold text-[#0b2545]">Health Products & Tools</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Developing practical health products and tools to address real-world healthcare challenges.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0b2545] flex items-center justify-center mb-1">
            <Database className="w-5 h-5 text-[#008489]" />
          </div>
          <h3 className="text-base font-bold text-[#0b2545]">Health Intelligence</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Transforming health data, evidence, and knowledge into insights that support better decisions.
          </p>
        </div>
      </div>

      {/* 6 Core Areas of Focus */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0b2545]">Areas of Focus</h2>
            <p className="text-xs text-slate-500">
              The foundational pillars guiding NORA's health technology development and research
            </p>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="text-xs text-[#008489] hover:text-[#006b6f] font-semibold flex items-center gap-1"
          >
            <span>View All Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORK_AREAS.map((area) => (
            <div
              key={area.id}
              onClick={() => onNavigate('work', area.id)}
              className="group p-5 bg-white rounded-lg border border-slate-200 hover:border-[#0b2545]/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-md bg-slate-100 text-[#0b2545] group-hover:bg-[#0b2545] group-hover:text-white transition-colors">
                    {getWorkIcon(area.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-[#0b2545] transition-colors">
                    {area.featuredProjects.length} initiatives
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0b2545] group-hover:text-[#008489] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-[#008489] font-medium mt-0.5">
                    {area.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {area.overview}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#008489] font-semibold group-hover:text-[#006b6f]">
                <span>View Details & Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Spotlight */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-[#0b2545]">Featured Products & Innovations</h3>
            <p className="text-xs text-slate-500">
              Verified corporate technology solutions across health data, surveillance, and clinical research
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs text-[#008489] hover:text-[#006b6f] font-semibold flex items-center gap-1"
          >
            <span>Open Product Catalogue ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.slice(0, 2).map((prod) => (
            <div
              key={prod.id}
              onClick={() => onNavigate('products')}
              className="p-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-colors cursor-pointer space-y-2.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0b2545] text-sm">{prod.name}</span>
                <span className="font-mono text-[11px] text-[#008489] font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  {prod.status}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {prod.description}
              </p>
              <div className="text-[11px] text-[#008489] font-semibold flex items-center gap-1 pt-1">
                <span>{prod.accessActionLabel}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News & Insights */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-[#0b2545]">Latest Company News & Insights</h3>
            <p className="text-xs text-slate-500">Announcements, publications, and research highlights</p>
          </div>
          <button
            onClick={() => onNavigate('news')}
            className="text-xs text-[#008489] hover:text-[#006b6f] font-semibold flex items-center gap-1"
          >
            <span>View All News</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.slice(0, 2).map((item) => (
            <div
              key={item.id}
              onClick={() => onReadArticle(item)}
              className="p-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-colors cursor-pointer space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="text-[#008489] font-medium">{item.category}</span>
                <span className="font-mono text-[11px]">{item.date}</span>
              </div>
              <h4 className="text-sm font-bold text-[#0b2545] leading-snug hover:text-[#008489] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
              <div className="text-[11px] text-[#008489] font-semibold flex items-center gap-1 pt-1">
                <span>Read Full Publication</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
